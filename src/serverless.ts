import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@codegenie/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { BizExceptionFilter } from './config/fillter/BizExceptionFilter';
import { GlobalMiddleware } from './config/middleware/global.middleware';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  if (!server) {
    const expressApp = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    app.enableCors();
    app.use(GlobalMiddleware);
    app.useGlobalFilters(new BizExceptionFilter());
    await app.init();
    server = serverlessExpress({ app: expressApp });
  }
  return server;
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  //打印日志内容
  console.log(JSON.stringify(event));
  server = await bootstrap();
  return server(event, context, callback);
};
