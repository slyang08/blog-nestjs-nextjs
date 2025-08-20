// src/category/schemas/category.schema.ts
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ default: null })
  description?: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
