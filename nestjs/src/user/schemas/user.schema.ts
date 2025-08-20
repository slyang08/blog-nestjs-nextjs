// src/user/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type UserDocument = User & Document & { _id: Types.ObjectId };

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: false })
  verified: boolean;

  @Prop({ default: "user", enum: ["user", "admin"] })
  role: "user" | "admin";

  @Prop()
  profileImageUrl?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
