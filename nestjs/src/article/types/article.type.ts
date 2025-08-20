// src/article/types/article.type.ts
import { Types } from "mongoose";

export type ArticleStatus = "draft" | "published";

export type ArticleData = {
  id: Types.ObjectId;
  title: string;
  content: string;
  authorId: Types.ObjectId;
  images: string[];
  tags: string[];
  publishedAt: Date | null;
  status: ArticleStatus;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
};
