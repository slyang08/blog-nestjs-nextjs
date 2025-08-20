// src/article/article.service.ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Article } from "./schemas/article.schema.js";

@Injectable()
export class ArticleService {
  constructor(@InjectModel("Article") private articleModel: Model<Article>) {}

  async createArticle(articleData: Partial<Article>): Promise<Article> {
    const newArticle = new this.articleModel(articleData);
    return newArticle.save();
  }

  async getAllArticles(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async getArticleById(id: string): Promise<Article | null> {
    return this.articleModel.findById(id).exec();
  }

  async updateArticle(id: string, articleData: Partial<Article>): Promise<Article | null> {
    return this.articleModel.findByIdAndUpdate(id, articleData, { new: true }).exec();
  }

  async deleteArticle(id: string): Promise<Article | null> {
    return this.articleModel.findByIdAndDelete(id).exec();
  }
}
