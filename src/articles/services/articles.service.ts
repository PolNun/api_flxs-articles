import { Injectable } from "@nestjs/common";
import { ArticleRepository } from "../repositories/article.repository";
import { Article } from "../models/article.model";
import { ArticleAttributes } from "../models/ArticleAttributes";
import { GetArticlesFilterDto } from "../models/GetArticlesFilterDto";

@Injectable()
export class ArticlesService {
  constructor(private articleRepository: ArticleRepository) {
  }

  async create(article: ArticleAttributes): Promise<Article> {
    return this.articleRepository.create(article);
  }

  async findAll(filter?: GetArticlesFilterDto): Promise<Article[]> {
    return this.articleRepository.findAll(filter);
  }

  async findOne(id: number): Promise<Article> {
    return this.articleRepository.findOne(id);
  }

  async update(id: number, article: ArticleAttributes): Promise<Article> {
    return this.articleRepository.update(id, article);
  }

  async disable(id: number): Promise<void> {
    return this.articleRepository.disable(id);
  }
}
