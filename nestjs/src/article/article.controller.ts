// src/article/article.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from "@nestjs/common";

import { ArticleService } from "./article.service.js";
import { Article } from "./schemas/article.schema.js";

@Controller("articles")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async createArticle(@Body() articleData: Partial<Article>): Promise<Article> {
    return this.articleService.createArticle(articleData);
  }

  @Get()
  async getAllArticles(): Promise<Article[]> {
    return this.articleService.getAllArticles();
  }

  @Get(":id")
  async getArticleById(@Param("id") id: string): Promise<Article | null> {
    return this.articleService.getArticleById(id);
  }

  @Put(":id")
  async updateArticle(
    @Param("id") id: string,
    @Body() articleData: Partial<Article>
  ): Promise<Article | null> {
    return this.articleService.updateArticle(id, articleData);
  }

  @Delete(":id")
  async deleteArticle(@Param("id") id: string): Promise<Article | null> {
    return this.articleService.deleteArticle(id);
  }
}
