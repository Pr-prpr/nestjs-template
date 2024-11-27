import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  constructor() {}

  testMethod() {
    return 'this is a test method';
  }
}
