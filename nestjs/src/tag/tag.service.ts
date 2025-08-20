// src/tag/tag.service.ts
import { Injectable, ConflictException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Tag } from "./schemas/tag.schema.js";

@Injectable()
export class TagService {
  constructor(@InjectModel("Tag") private tagModel: Model<Tag>) {}

  async createTag(tagData: Partial<Tag>): Promise<Tag> {
    const existingTag = await this.tagModel.findOne({ name: tagData.name }).exec();
    if (existingTag) throw new ConflictException("Tag with this name already exists.");

    const newTag = new this.tagModel(tagData);
    return newTag.save();
  }

  async getAllTags(): Promise<Tag[]> {
    return this.tagModel.find().exec();
  }

  async getTagById(id: string): Promise<Tag | null> {
    return this.tagModel.findById(id).exec();
  }

  async updateTag(id: string, tagData: Partial<Tag>): Promise<Tag | null> {
    return this.tagModel.findByIdAndUpdate(id, tagData, { new: true }).exec();
  }

  async deleteTag(id: string): Promise<Tag | null> {
    return this.tagModel.findByIdAndDelete(id).exec();
  }
}
