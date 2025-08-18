// src/main.ts
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as dotenv from "dotenv";

dotenv.config();

import { AppModule } from "./app.module.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Convert the payload to a DTO instance
      whitelist: true, // Only allow properties defined in the DTO
      forbidNonWhitelisted: true, // Throw an error if the request contains undefined properties
      skipMissingProperties: false, // Do not skip missing attributes
    })
  );
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
