import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ArticlesService } from "../services/articles.service";
import { ArticleAttributes } from "../interfaces/ArticleAttributes";
import { GetArticlesFilterDto } from "../interfaces/GetArticlesFilterDto";

@ApiTags("articles")
@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {
  }

  @Post()
  create(@Body(new ValidationPipe()) article: ArticleAttributes) {
    return this.articlesService.create(article);
  }

  @Get()
  findAll(@Query() filter: GetArticlesFilterDto) {
    return this.articlesService.findAll(filter);
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.articlesService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() article: ArticleAttributes) {
    return this.articlesService.update(id, article);
  }

  @Delete(":id")
  disable(@Param("id") id: number) {
    return this.articlesService.disable(id);
  }
}
