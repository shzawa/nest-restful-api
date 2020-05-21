import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {

  @Post()
  creat(@Body() createUsers: CreateUserDto) {
    return createUsers
  }
}
