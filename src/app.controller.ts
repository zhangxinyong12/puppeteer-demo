import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log(0);
  }

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
}
