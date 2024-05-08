import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Article } from "../models/article.model";

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article) private articleModel: typeof Article) {
  }

  async create(article: Article) {
    return null;
  }

  async findAll(): Promise<Article[]> {
    return null;
  }

  async findOne(id: string): Promise<Article> {
    return null;
  }

  async update(id: string, article: Article) {
    return null;
  }

  async remove(id: string): Promise<void> {
    return null;
  }
}
