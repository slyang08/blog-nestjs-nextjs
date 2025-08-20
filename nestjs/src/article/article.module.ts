// src/article/article.module.ts
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ArticleController } from "./article.controller.js";
import { ArticleService } from "./article.service.js";
import { Article } from "./schemas/article.schema.js";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Article", schema: Article }])],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
