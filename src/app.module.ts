import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TestModule} from "./moduleTest/test.module";
import {AppMiddleware} from "./config/middleware/app.middleware";
import {TestMiddleware} from "./config/middleware/test.middleware";
import {TestController} from "./moduleTest/test.controller";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {TestInterceptor} from "./config/interceptor/test.interceptor";

@Module({
  imports: [TestModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TestInterceptor,
    },
  ],
})
export class AppModule  implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AppMiddleware).forRoutes({path: "app/**", method: RequestMethod.ALL});
    consumer.apply(TestMiddleware).forRoutes(TestController);
  }
}
