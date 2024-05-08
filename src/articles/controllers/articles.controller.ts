import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ArticlesService } from "../services/articles.service";
import { JwtAuthGuard } from "../../security/guards/jwt-auth.guard";
import { ArticleAttributesDto, ArticleDto } from "../../swagger/dto/ArticleAttributesDto";
import { GetArticlesFilterDto } from "../models/GetArticlesFilterDto";
import { ArticleAttributes } from "../models/ArticleAttributes";

@ApiTags("articles")
@ApiBearerAuth()
@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Obtener todos los artículos según filtros (filtros opcionales)" })
  @ApiResponse({ status: 200, description: "Devuelve una lista de artículos", type: [ArticleDto] })
  @Get()
  findAll(@Query() filter: GetArticlesFilterDto) {
    return this.articlesService.findAll(filter);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Crear un nuevo artículo" })
  @ApiBody({ type: ArticleAttributesDto })
  @ApiResponse({ status: 201, description: "El artículo se creó crorectamente", type: ArticleDto })
  @Post()
  create(@Body(new ValidationPipe()) article: ArticleAttributes) {
    return this.articlesService.create(article);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Obtener un artículo por ID" })
  @ApiResponse({ status: 200, description: "Devuelve un artículo según el ID", type: ArticleDto })
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.articlesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Actualizar un artículo" })
  @ApiBody({ type: ArticleAttributesDto })
  @ApiResponse({ status: 200, description: "Actualiza el artículo según el ID y los campos dados", type: ArticleDto })
  @Patch(":id")
  update(@Param("id") id: number, @Body() article: ArticleAttributes) {
    return this.articlesService.update(id, article);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Desactivar un artículo" })
  @ApiResponse({
    status: 200,
    description: "Desactiva un artículo poniendo en false el campo isActive",
    type: ArticleDto
  })
  @Delete(":id")
  disable(@Param("id") id: number) {
    return this.articlesService.disable(id);
  }
}
