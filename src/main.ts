import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalMiddleware } from './config/middleware/global.middleware';
import { BizExceptionFilter } from './config/fillter/BizExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(GlobalMiddleware);
  app.useGlobalFilters(new BizExceptionFilter());
  await app.listen(3000);
}
bootstrap();
