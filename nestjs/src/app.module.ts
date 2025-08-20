// src/app.module.ts
import { Module } from "@nestjs/common";

import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { ArticleModule } from "./article/article.module.js";
import { AuthController } from "./auth/auth.controller.js";
import { AuthModule } from "./auth/auth.module.js";
import { AuthService } from "./auth/auth.service.js";
import { CategoryController } from "./category/category.controller.js";
import { CategoryModule } from "./category/category.module.js";
import { CommentModule } from "./comment/comment.module.js";
import { EmailModule } from "./email/email.module.js";
import { TagModule } from "./tag/tag.module.js";
import { UserModule } from "./user/user.module.js";

@Module({
  imports: [
    UserModule,
    AuthModule,
    EmailModule,
    ArticleModule,
    CategoryModule,
    TagModule,
    CommentModule,
  ],
  controllers: [AppController, AuthController, CategoryController],
  providers: [AppService, AuthService],
})
export class AppModule {}
