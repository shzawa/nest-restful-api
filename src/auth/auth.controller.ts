import { Controller, ValidationPipe, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign_in')
  creat(@Body(ValidationPipe) createUsers: CreateUserDto) {
    return this.authService.login(createUsers)
  }
}
