import { Controller, Get, Post, Body, ValidationPipe, Param, UseGuards, Request } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':username')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('username') username: string, @Request() req: any) {

    return this.usersService.findOne(username)
  }

  @Post()
  creat(@Body(ValidationPipe) createUsers: CreateUserDto) {
    return this.usersService.create(createUsers)
  }
}
