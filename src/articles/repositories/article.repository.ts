import { Inject, Injectable } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { Article, ArticleAttributes } from "../models/article.model";

@Injectable()
export class ArticleRepository {
  constructor(@Inject(Sequelize) private sequelize: Sequelize) {
  }

  async create(article: ArticleAttributes): Promise<Article> {
    try {
      return await this.sequelize.getRepository(Article).create(article);
    } catch (error) {
      console.error("Error while creating an article:", error);
      throw new Error("Could not create the article");
    }
  }

  async findAll(): Promise<Article[]> {
    try {
      return await this.sequelize.getRepository(Article).findAll();
    } catch (error) {
      console.error("Error while finding all articles:", error);
      throw new Error("Could not find the articles");
    }
  }

  async findOne(id: number): Promise<Article> {
    try {
      const article = await this.sequelize.getRepository(Article).findOne({ where: { id } });
      if (!article) {
        throw new Error(`No article found with id: ${id}`);
      }
      return article;
    } catch (error) {
      console.error(`Error while finding an article with id: ${id}`, error);
      throw new Error("Could not find the article");
    }
  }

  async update(id: number, article: ArticleAttributes): Promise<Article> {
    try {
      const [affectedCount] = await this.sequelize.getRepository(Article).update(article, { where: { id } });
      if (affectedCount > 0) {
        return this.findOne(id);
      } else {
        throw new Error(`No article found with id: ${id} to update`);
      }
    } catch (error) {
      console.error(`Error while updating an article with id: ${id}`, error);
      throw new Error("Could not update the article");
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const [affectedCount] = await this.sequelize.getRepository(Article).update({ isActive: false }, { where: { id } });
      if (affectedCount === 0) {
        throw new Error(`No article found with id: ${id} to deactivate`);
      }
    } catch (error) {
      console.error(`Error while deactivating an article with id: ${id}`, error);
      throw new Error("Could not deactivate the article");
    }
  }
}