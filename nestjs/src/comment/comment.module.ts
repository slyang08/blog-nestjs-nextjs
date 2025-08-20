// src/comment/comment.module.ts
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CommentController } from "./comment.controller.js";
import { CommentService } from "./comment.service.js";
import { CommentSchema } from "./schemas/comment.schema.js";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Comment", schema: CommentSchema }])],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
