// src/category/category.service.ts
import { Injectable, ConflictException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Category } from "./schemas/category.schema.js";

@Injectable()
export class CategoryService {
  constructor(@InjectModel("Category") private categoryModel: Model<Category>) {}

  async createCategory(categoryData: Partial<Category>): Promise<Category> {
    const existedCategory = await this.categoryModel.findOne({ name: categoryData.name }).exec();
    if (existedCategory) throw new ConflictException("Category with this name already exists.");

    const newCategory = new this.categoryModel(categoryData);
    return newCategory.save();
  }

  async getAllCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async getCategoryById(id: string): Promise<Category | null> {
    return this.categoryModel.findById(id).exec();
  }

  async updateCategory(id: string, categoryData: Partial<Category>): Promise<Category | null> {
    return this.categoryModel.findByIdAndUpdate(id, categoryData, { new: true }).exec();
  }

  async deleteCategory(id: string): Promise<Category | null> {
    return this.categoryModel.findByIdAndDelete(id).exec();
  }
}
