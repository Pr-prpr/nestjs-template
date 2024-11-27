import { NextFunction } from 'express';
// 无法访问全局中间件中的 DI 容器。使用 app.use() 时可以使用 功能中间件。或者，你可以使用类中间件并在 AppModule（或任何其他模块）中将其与 .forRoutes('*') 一起使用。
export function GlobalMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('全局生效的中间件');
  next();
}
