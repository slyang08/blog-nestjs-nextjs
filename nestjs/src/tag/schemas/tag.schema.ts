// src/tag/tag.schema.ts
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Tag {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ default: null })
  description?: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
