// src/article/schemas/article.schema.ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type ArticleDocument = Article & Document;

@Schema({ timestamps: true })
export class Article {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true })
  authorId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: [String], default: [] })
  images: string[];

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ type: Date, default: null })
  publishedAt: Date | null;

  @Prop({ enum: ["draft", "published"], default: "draft" })
  status: "draft" | "published";

  @Prop({ default: true })
  isPublic: boolean;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
