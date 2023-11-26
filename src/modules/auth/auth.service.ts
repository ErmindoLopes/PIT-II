import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/mock/constants';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';



@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService
  ) { }

  async login(loginRequest: any) {

    let ret: any = new UnauthorizedException();

    try {

      const { email, password } = loginRequest;

      ret = new UnauthorizedException('Usuário não autorizado');


      let user: User = null;      
      const users = await this.userService.findBy({email: email.toLowerCase()});
      user = users[0] || null;



      // Verifica se encontrou o user
      if (!user) {
        ret = new UnauthorizedException('Usuário não autorizado');
        return ret;
      }


      // Compara as senhas
      const hash = user.password;
      const match = password === hash;
      if (match) {

        const payload = { 
          iss:jwtConstants.iss, 
          aud:jwtConstants.aud, 
          sub: user.email, 
        };
        payload[jwtConstants.aud] = {
          user_id: user.id,
          email: user.email
        }
        const token = await this.jwtService.signAsync(payload);

        ret = { token };

      }
      else {
        ret = new UnauthorizedException('Usuário não autorizado');
        return ret;
      }


    } catch (error) {
      console.log(error);
      ret = new InternalServerErrorException(error);
    }

    return ret;

  }


}
