import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ArticlesService } from "../services/articles.service";
import { ArticleAttributes } from "../interfaces/ArticleAttributes";
import { GetArticlesFilterDto } from "../interfaces/GetArticlesFilterDto";
import { JwtAuthGuard } from "../../security/guards/jwt-auth.guard";

@ApiTags("articles")
@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(new ValidationPipe()) article: ArticleAttributes) {
    return this.articlesService.create(article);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() filter: GetArticlesFilterDto) {
    return this.articlesService.findAll(filter);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.articlesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: number, @Body() article: ArticleAttributes) {
    return this.articlesService.update(id, article);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  disable(@Param("id") id: number) {
    return this.articlesService.disable(id);
  }
}
