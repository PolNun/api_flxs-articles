import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ArticleAttributesDto {
  @ApiProperty({ description: "ID del artículo", required: false })
  @IsOptional()
  id?: number;

  @ApiProperty({ description: "Nombre del artículo" })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: "Fecha de modificación del artículo (UTC)", required: false })
  @IsOptional()
  modified?: Date;

  @ApiProperty({ description: "Marca del artículo" })
  @IsNotEmpty()
  @IsString()
  brand: string;

  @ApiProperty({ description: "Estado del artículo", required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class ArticleDto extends ArticleAttributesDto {
  @ApiProperty({ description: "El ID del artículo" })
  id: number;
}
