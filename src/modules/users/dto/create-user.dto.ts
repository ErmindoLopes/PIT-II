export class CreateUserDto {
    email: string;
    password: string;
    is_admin: boolean = false;
  }