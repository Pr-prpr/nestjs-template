import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { BizException } from '../exception/BizException';

@Injectable()
export class TestPipe implements PipeTransform {
  transform(value: any): any {
    if (value === 'error') {
      throw new BizException('pipe中抛出的错误,参数不正确', 400);
    }
    return value + '_pipe';
  }
}
