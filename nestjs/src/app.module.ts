// src/app.module.ts
import { Module } from "@nestjs/common";

import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { AuthController } from "./auth/auth.controller.js";
import { AuthModule } from "./auth/auth.module.js";
import { AuthService } from "./auth/auth.service.js";
import { UserModule } from "./user/user.module.js";
import { EmailModule } from './email/email.module';

@Module({
  imports: [UserModule, AuthModule, EmailModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
