// src/comment/dto/create-comment.dto.ts
import { IsNotEmpty, IsString, IsMongoId } from "class-validator";

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsMongoId()
  articleId: string;

  @IsNotEmpty()
  @IsMongoId()
  authorId: string;
}
