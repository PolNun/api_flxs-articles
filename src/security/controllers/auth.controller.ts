import { Controller, Get } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private jwtService: JwtService) {
  }

  // Método desprotegido por razones de demostración
  @ApiOperation({ summary: "Obtener token de autorización" })
  @ApiOkResponse({
    description: "Devuelve un token JWT como string",
    type: String
  })
  @Get("token")
  getToken() {
    const payload = { username: "flexxus", sub: 1 };
    return this.jwtService.sign(payload);
  }
}
