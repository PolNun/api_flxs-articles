import { Module } from "@nestjs/common";
import { ArticlesService } from "./services/articles.service";
import { ArticlesController } from "./controllers/articles.controller";

@Module({
  providers: [ArticlesService],
  controllers: [ArticlesController]
})
export class ArticlesModule {
}
