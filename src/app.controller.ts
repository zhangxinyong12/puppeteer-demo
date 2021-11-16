import { Controller, Get } from '@nestjs/common';
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
  sigIn() {
    return this.appService.sigIn();
  }
}
