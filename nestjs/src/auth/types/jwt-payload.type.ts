// src/auth/types/jwt-payload.type.ts
export type JwtPayload = {
  id: string;
  email: string;
  role: "user" | "admin";
};
