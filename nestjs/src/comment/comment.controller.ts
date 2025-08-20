// src/comment/comment.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { CommentService } from "./comment.service.js";
import { CreateCommentDto } from "./dto/create-comment.dto.js";
import { UpdateCommentDto } from "./dto/update-comment.dto.js";
import { Comment } from "./schemas/comment.schema.js";

@Controller("comments")
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(@Body() commentData: CreateCommentDto): Promise<Comment> {
    return this.commentService.createComment(commentData);
  }

  @Get()
  async getAllComments(): Promise<Comment[]> {
    return this.commentService.getAllComments();
  }

  @Get(":id")
  async getCommentById(@Param("id") id: string): Promise<Comment | null> {
    return this.commentService.getCommentById(id);
  }

  @Put(":id")
  async updateComment(
    @Param("id") id: string,
    @Body() commentData: UpdateCommentDto
  ): Promise<Comment | null> {
    return this.commentService.updateComment(id, commentData);
  }

  @Delete(":id")
  async deleteComment(@Param("id") id: string): Promise<Comment | null> {
    return this.commentService.deleteComment(id);
  }
}
