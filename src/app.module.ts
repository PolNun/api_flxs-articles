import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ArticlesModule } from "./articles/articles.module";
import { dbConfig } from "../bin/db.config";
import { SecurityModule } from "./security/security.module";

@Module({
  imports: [
    SequelizeModule.forRoot(dbConfig),
    ArticlesModule,
    SecurityModule
  ]
})
export class AppModule {}
