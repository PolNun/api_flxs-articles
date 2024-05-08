import { Module } from "@nestjs/common";
import { ArticlesService } from "./services/articles.service";
import { ArticlesController } from "./controllers/articles.controller";
import { ArticleRepository } from "./repositories/article.repository";
import { SequelizeModule } from "@nestjs/sequelize";
import { Article } from "./models/article.model";

@Module({
  providers: [
    ArticlesService,
    ArticleRepository
  ],
  imports: [
    SequelizeModule.forFeature([Article])
  ],
  controllers: [ArticlesController]
})
export class ArticlesModule {
}
