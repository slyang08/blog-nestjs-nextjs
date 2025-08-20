// src/category/dto/create-category.dto.ts
import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
