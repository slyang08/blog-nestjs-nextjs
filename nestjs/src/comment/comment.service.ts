// src/comment/comment.service.ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Comment } from "./schemas/comment.schema.js";

@Injectable()
export class CommentService {
  constructor(@InjectModel("Comment") private commentModel: Model<Comment>) {}

  async createComment(commentData: Partial<Comment>): Promise<Comment> {
    const newComment = new this.commentModel(commentData);
    return newComment.save();
  }

  async getAllComments(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  async getCommentById(id: string): Promise<Comment | null> {
    return this.commentModel.findById(id).exec();
  }

  async updateComment(id: string, commentData: Partial<Comment>): Promise<Comment | null> {
    return this.commentModel.findByIdAndUpdate(id, commentData, { new: true }).exec();
  }

  async deleteComment(id: string): Promise<Comment | null> {
    return this.commentModel.findByIdAndDelete(id).exec();
  }
}
