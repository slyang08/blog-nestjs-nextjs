// src/auth/auth.controller.ts
import { Controller, Post, Body, Get, Param } from "@nestjs/common";

import { AuthService } from "./auth.service.js";
import { CreateUserDto } from "../user/dto/create-user.dto.js";
import { User } from "../user/schemas/user.schema.js";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() createUserDto: CreateUserDto): Promise<{ message: string }> {
    return this.authService.register(createUserDto);
  }

  @Get("verify-email/:id")
  async verifyEmail(@Param("id") id: string): Promise<{ message: string }> {
    return this.authService.verifyEmail(id);
  }

  @Post("login")
  async login(@Body() createUserDto: CreateUserDto): Promise<User | undefined> {
    return this.authService.login(createUserDto);
  }

  @Post("change-password/:id")
  async changePassword(
    @Param("id") id: string,
    @Body() { currentPassword, newPassword }: { currentPassword: string; newPassword: string }
  ): Promise<{ message: string }> {
    return this.authService.changePassword(id, currentPassword, newPassword);
  }
}
