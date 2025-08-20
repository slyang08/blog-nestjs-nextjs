import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Tag } from "./schemas/tag.schema.js";
import { TagController } from "./tag.controller.js";
import { TagService } from "./tag.service.js";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Tag", schema: Tag }])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
