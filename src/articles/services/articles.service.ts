import { Injectable } from "@nestjs/common";
import { Article } from "../models/article.model";
import { ArticleRepository } from "../repositories/article.repository";

@Injectable()
export class ArticlesService {
  constructor(private articleRepository: ArticleRepository) {
  }

  async create(article: Article) {
    return this.articleRepository.create(article);
  }

  async findAll(): Promise<Article[]> {
    return this.articleRepository.findAll();
  }

  async findOne(id: string): Promise<Article> {
    return this.articleRepository.findOne(id);
  }

  async update(id: string, article: Article) {
    return this.articleRepository.update(id, article);
  }

  async remove(id: string): Promise<void> {
    return this.articleRepository.remove(id);
  }
}
