import { Controller, Get } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Controller("auth")
export class AuthController {
  constructor(private jwtService: JwtService) {
  }

  // Método desprotegido por razones de demostración
  @Get("token")
  getToken() {
    const payload = { username: "flexxus", sub: 1 };
    return this.jwtService.sign(payload);
  }
}
