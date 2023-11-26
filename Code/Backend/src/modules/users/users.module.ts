import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {


    /**
     *
     */
    constructor(
        private readonly usersService: UsersService,
    ) {

        this.checkAdminUser();

    }

    async checkAdminUser() {
        let user = await this.usersService.findOne(1);
        if (!user) {
           user = await this.usersService.create(
                {
                    email: 'a@a.com',
                    password: '123456',
                    is_admin: true
                }
            );

        }
    }
}