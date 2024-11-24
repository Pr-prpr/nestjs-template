import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from "express";
import {BizException} from "../exception/BizException";

@Injectable()
export class TestGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        if (!request.query.key) {
            throw new BizException("没有输入参数key", 500);
        }
        return true;
    }
}

