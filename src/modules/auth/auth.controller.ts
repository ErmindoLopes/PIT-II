import { BadRequestException, Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';

import { AuthService } from 'src/modules/auth/auth.service';

@Controller('auth')
export class AuthController {


  constructor(
    private readonly authService: AuthService,
  ) { }


  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginRequest: { email: string, password: string },
  ) {


    let reqResp: any = new BadRequestException();

    try {


      reqResp = await this.authService.login({ ...loginRequest });
      

    } catch (error) {
      console.log(error);
      reqResp = new HttpException({ status: HttpStatus.BAD_REQUEST, error: 'Erro na requisição', }, HttpStatus.BAD_REQUEST, { cause: error });
    }


    if (reqResp instanceof HttpException)
      throw reqResp;
    else
      return reqResp;

  }
}
