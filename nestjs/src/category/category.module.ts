import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CategoryController } from "./category.controller.js";
import { CategoryService } from "./category.service.js";
import { Category } from "./schemas/category.schema.js";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Category", schema: Category }])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
