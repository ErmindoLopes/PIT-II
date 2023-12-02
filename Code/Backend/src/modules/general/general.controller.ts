import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';


@Controller('')
export class GeneralController {


  constructor(
  ) { }


  @Get('')
  @HttpCode(HttpStatus.OK)
  async healthz() {

      return 'PIT-II Backend Online....';

  }
}
