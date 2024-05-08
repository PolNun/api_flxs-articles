import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ArticlesService } from "../services/articles.service";
import { ArticleAttributes } from "../models/article.model";

@ApiTags("articles")
@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {
  }

  @Post()
  create(@Body() article: ArticleAttributes) {
    return this.articlesService.create(article);
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
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
  remove(@Param("id") id: number) {
    return this.articlesService.remove(id);
  }
}
