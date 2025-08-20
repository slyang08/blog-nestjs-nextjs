// src/user/types/user.type.ts
export type UserRole = "user" | "admin";

export type UserData = {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  profileImageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};
