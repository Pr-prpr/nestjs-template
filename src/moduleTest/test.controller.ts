import {Controller, Get, Query} from "@nestjs/common";
import {TestService} from "./test.service";
import {BizException} from "../config/exception/BizException";
import {TestPipe} from "../config/pipie/test.pipe";

@Controller("/test")
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get("")
    async test(){
        return this.testService.testMethod();
    }
    @Get("/error")
    async errorTest() {
        throw new BizException("主动抛出错误", 500);
    }
    @Get("/pipe")
    async pipeTest(@Query("value", TestPipe) value: string) {
        return value;
    }
}