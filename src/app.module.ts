import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { ArticlesModule } from "./articles/articles.module";
import { dbConfig } from "../bin/db.config";

@Module({
  imports: [
    SequelizeModule.forRoot(dbConfig),
    ArticlesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
