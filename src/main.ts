import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {GlobalMiddleware} from "./config/middleware/global.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(GlobalMiddleware);
  await app.listen(3000);
}
bootstrap();
