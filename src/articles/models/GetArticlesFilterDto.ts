import { IsBoolean, IsOptional, IsString } from "class-validator";

export class GetArticlesFilterDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  exactMatch?: boolean;
}