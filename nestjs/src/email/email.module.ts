// src/email/email.module.ts
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";

import { EmailService } from "./email.service.js";

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          service: "gmail",
          auth: {
            user: configService.get("GMAIL_USER"),
            pass: configService.get("GMAIL_APP_PASSWORD"),
          },
        },
        defaults: {
          from: `"No Reply" <${configService.get("GMAIL_USER")}>`,
        },
      }),
    }),
    ConfigModule,
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
