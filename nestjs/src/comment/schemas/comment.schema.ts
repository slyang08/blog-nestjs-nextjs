// src/comment/comment.schema.ts
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

@Schema({ timestamps: true })
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Article" })
  articleId: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  authorId: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
