import { Module } from "@nestjs/common";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./controllers/auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { JWT_SECRET } from "../../bin/jwt-secret";

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
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
