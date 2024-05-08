import { Module } from "@nestjs/common";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./controllers/auth.controller";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      secret: "asd123",
      signOptions: { expiresIn: "1h" }
    })
  ],
  providers: [
    JwtStrategy
  ],
  controllers: [
    AuthController
  ]
})
export class SecurityModule {
}
