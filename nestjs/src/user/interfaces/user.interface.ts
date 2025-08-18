// src/user/interfaces/user.interface.ts
import { Types } from "mongoose";

export interface User {
  id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "user" | "admin";
  profileImageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
