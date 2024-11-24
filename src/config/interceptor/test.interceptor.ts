import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TestInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => console.log(`访问路径${request.url} 花费 ${Date.now() - now}ms`)),
            );
    }
}