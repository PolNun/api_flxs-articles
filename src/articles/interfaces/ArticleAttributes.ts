import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ArticleAttributes {
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  modified?: Date;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
