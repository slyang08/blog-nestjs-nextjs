// src/article/dto/create-article.dto.ts
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  authorId: string; // 用戶端送過來的可能是 string

  @IsArray()
  @IsOptional()
  images?: string[];

  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsDateString()
  @IsOptional()
  publishedAt?: string | null;

  @IsEnum(["draft", "published"])
  @IsOptional()
  status?: "draft" | "published";

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}
