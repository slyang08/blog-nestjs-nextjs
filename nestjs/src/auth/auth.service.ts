// src/auth/auth.service.ts
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

import { EmailService } from "../email/email.service.js";
import { CreateUserDto } from "../user/dto/create-user.dto.js";
import { LoginUserDto } from "../user/dto/login-user.dto.js";
import { UserDocument } from "../user/schemas/user.schema.js";
import { UserService } from "../user/user.service.js";
import { JwtPayload } from "./types/jwt-payload.type.js";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService
  ) {}

  async register(createUserDto: CreateUserDto): Promise<{ message: string }> {
    const existedEmail = await this.userService.findByEmail(createUserDto.email);
    if (existedEmail) throw new ConflictException("Email already registered");

    if (createUserDto.password !== createUserDto.confirmPassword) {
      throw new BadRequestException("Passwords do not match");
    }

    const newUser: UserDocument = await this.userService.create(createUserDto);

    const payload = { id: newUser._id.toString(), email: newUser.email };

    const token: string = this.jwtService.sign(payload, {
      secret: process.env.JWT_VERIFICATION_TOKEN_SECRET,
      expiresIn: process.env.JWT_VERIFICATION_TOKEN_EXPIRATION_TIME,
    });

    await this.emailService.sendVerificationEmail(newUser.email, token);

    return { message: "User registered. Please verify your email." };
  }

  async verifyEmail(token: string): Promise<{ message: string }> {
    let payload: JwtPayload;
    try {
      payload = this.jwtService.verify<JwtPayload>(token, {
        secret: process.env.JWT_VERIFICATION_TOKEN_SECRET,
      });
    } catch {
      throw new UnauthorizedException("Invalid or expired token");
    }

    const user = await this.userService.findById(payload.id);
    if (!user) throw new Error("User not found");

    if (user.verified) {
      return { message: "Email already verified." };
    }

    user.verified = true;
    await user.save();

    return { message: "Email successfully verified!" };
  }

  async login(loginUserDto: LoginUserDto): Promise<UserDocument> {
    const user = await this.userService.findByEmail(loginUserDto.email);
    if (!user) throw new NotFoundException("User not found");

    const isPasswordValid = await bcrypt.compare(loginUserDto.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException("Invalid password");

    if (!user.verified) throw new ForbiddenException("Please verify your email first");

    return user;
  }

  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string
  ): Promise<{ message: string }> {
    const user = await this.userService.findById(userId);
    if (!user) throw new Error("User not found");

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) throw new Error("Current password is incorrect");

    if (newPassword.length < 6) {
      throw new Error("New password must be at least 6 characters long");
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    return { message: "Password updated successfully." };
  }
}
