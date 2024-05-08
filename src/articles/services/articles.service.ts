import { Injectable } from "@nestjs/common";
import { Article, ArticleAttributes } from "../models/article.model";
import { ArticleRepository } from "../repositories/article.repository";

@Injectable()
export class ArticlesService {
  constructor(private articleRepository: ArticleRepository) {
  }

  async create(article: ArticleAttributes): Promise<Article> {
    return this.articleRepository.create(article);
  }

  async findAll(): Promise<Article[]> {
    return this.articleRepository.findAll();
  }

  async findOne(id: number): Promise<Article> {
    return this.articleRepository.findOne(id);
  }

  async update(id: number, article: ArticleAttributes): Promise<Article> {
    return this.articleRepository.update(id, article);
  }

  async remove(id: number): Promise<void> {
    return this.articleRepository.remove(id);
  }
}
