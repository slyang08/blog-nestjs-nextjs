// src/category/category.controller.ts
import { Body, ConflictException, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { CategoryService } from "./category.service.js";
import { CreateCategoryDto } from "./dto/create-category.dto.js";
import { Category } from "./schemas/category.schema.js";

@Controller("categories")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() categoryData: CreateCategoryDto): Promise<Category> {
    try {
      return await this.categoryService.createCategory(categoryData);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  @Get()
  async getAllCategories(): Promise<Category[]> {
    return this.categoryService.getAllCategories();
  }

  @Get(":id")
  async getCategoryById(@Param("id") id: string): Promise<Category | null> {
    return this.categoryService.getCategoryById(id);
  }

  @Put(":id")
  async updateCategory(
    @Param("id") id: string,
    @Body() categoryData: Partial<Category>
  ): Promise<Category | null> {
    return this.categoryService.updateCategory(id, categoryData);
  }

  @Delete(":id")
  async deleteCategory(@Param("id") id: string): Promise<Category | null> {
    return this.categoryService.deleteCategory(id);
  }
}
