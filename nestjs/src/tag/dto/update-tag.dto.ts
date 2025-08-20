// src/tag/dto/update-tag.dto.ts
import { IsOptional, IsString } from "class-validator";

export class UpdateTagDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
