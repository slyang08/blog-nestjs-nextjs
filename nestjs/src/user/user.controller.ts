// src/user/user.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";

import { CreateUserDto } from "./dto/create-user.dto.js";
import { User } from "./schemas/user.schema.js";
import { UserService } from "./user.service.js";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(":email")
  async findByEmail(@Param("email") email: string): Promise<User | null> {
    return this.userService.findByEmail(email);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateUserDto: Partial<CreateUserDto>
  ): Promise<User | null> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<User | null> {
    return this.userService.delete(id);
  }
}
