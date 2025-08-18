// src/email/email.service.ts
import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendVerificationEmail(email: string, token: string): Promise<void> {
    const url = `${process.env.EMAIL_CONFIRMATION_URL}?token=${token}`;
    await this.mailerService.sendMail({
      to: email,
      subject: "Email Verification",
      html: `<p>Please verify your email by clicking this link: <a href="${url}">${url}</a></p>`,
    });
  }
}
