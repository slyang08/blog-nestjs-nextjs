// src/user/dto/create-tag.dto.ts
import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateTagDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
