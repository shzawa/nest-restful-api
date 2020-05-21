import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Post()
  creat(@Body(ValidationPipe) createUsers: CreateUserDto) {
    return this.usersService.create(createUsers)
  }
}
