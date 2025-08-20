// src/tag/tag.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from "@nestjs/common";

import { CreateTagDto } from "./dto/create-tag.dto.js";
import { UpdateTagDto } from "./dto/update-tag.dto.js";
import { Tag } from "./schemas/tag.schema.js";
import { TagService } from "./tag.service.js";

@Controller("tags")
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async createTag(@Body() tagData: CreateTagDto): Promise<Tag> {
    return this.tagService.createTag(tagData);
  }

  @Get()
  async getAllTags(): Promise<Tag[]> {
    return this.tagService.getAllTags();
  }

  @Get(":id")
  async getTagById(@Param("id") id: string): Promise<Tag | null> {
    return this.tagService.getTagById(id);
  }

  @Put(":id")
  async updateTag(@Param("id") id: string, @Body() tagData: UpdateTagDto): Promise<Tag | null> {
    return this.tagService.updateTag(id, tagData);
  }

  @Delete(":id")
  async deleteTag(@Param("id") id: string): Promise<Tag | null> {
    return this.tagService.deleteTag(id);
  }
}
