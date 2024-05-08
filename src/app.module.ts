import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ArticlesModule } from "./articles/articles.module";
import { SecurityModule } from "./security/security.module";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "usuario",
      password: "clave",
      database: "flxs_entrevista",
      autoLoadModels: true,
      synchronize: true,
      dialectOptions: {
        useUTC: false,
        timezone: "America/Argentina/Buenos_Aires"
      },
      timezone: "America/Argentina/Buenos_Aires"
    }),
    ArticlesModule,
    SecurityModule
  ]
})
export class AppModule {}
