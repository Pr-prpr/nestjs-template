import { HttpException } from '@nestjs/common';

export class BizException extends HttpException {
  constructor(message: string, status: number) {
    super(message, status);
  }
}
