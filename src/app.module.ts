import { Module, OnModuleInit } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { jwtConstants } from './mock/constants';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { CupcakesController } from './modules/cupcakes/cupcakes.controller';
import { CupcakesModule } from './modules/cupcakes/cupcakes.module';
import { GeneralController } from './modules/general/general.controller';
import { OrdersController } from './modules/orders/orders.controller';
import { OrdersModule } from './modules/orders/orders.module';
import { UsersModule } from './modules/users/users.module';
import { config } from './ormconfig';

@Module({
  imports: [
    UsersModule,   
    CupcakesModule,
    OrdersModule,

    TypeOrmModule.forRoot(config),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),

    
  ],
  controllers: [    
    AuthController,
    CupcakesController,
    OrdersController,
    GeneralController,
  ],
  providers: [
    AppService,
    AuthService,
  ],
})
export class AppModule implements OnModuleInit {

  constructor(
  ) {}

  onModuleInit() {
    
  }


}





