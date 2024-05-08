import { Inject, Injectable } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { Article, ArticleAttributes } from "../models/article.model";

@Injectable()
export class ArticleRepository {
  constructor(@Inject(Sequelize) private sequelize: Sequelize) {
  }

  async create(article: ArticleAttributes): Promise<Article> {
    return await this.sequelize.getRepository(Article).create(article);
  }

  async findAll(): Promise<Article[]> {
    return await this.sequelize.getRepository(Article).findAll();
  }

  async findOne(id: string): Promise<Article> {
    return await this.sequelize.getRepository(Article).findOne({ where: { id } });
  }

  async update(id: string, article: Article): Promise<Article> {
    await this.sequelize.getRepository(Article).update(article, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.sequelize.getRepository(Article).update({ isActive: false }, { where: { id } });
  }
}