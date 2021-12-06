import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sigIn')
  sigIn(@Query() query) {
    const { userName, password } = query;
    if (!userName || !password) {
      return {
        success: false,
        msg: `请填写github： userName password`,
      };
    }
    console.log(userName, password);

    return this.appService.sigIn(userName, password);
  }
  @Get('sigInCookie')
  sigInCookie(@Query() query) {
    const { userName, password } = query;
    if (!userName || !password) {
      return {
        success: false,
        msg: `请填写github： userName password`,
      };
    }
    console.log(userName, password);
  }
  // addCookie

  @Post('add')
  add(@Body() body) {
    console.log(body);
    const { name } = body;
    const cookie = JSON.stringify(body.cookie);
    return this.appService.addCookie(name, cookie);
  }

  @Post('find')
  find(@Body() body) {
    return this.appService.findCookie();
  }
}
