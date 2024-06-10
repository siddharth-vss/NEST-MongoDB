/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get()
//   getHello(): string {
//        return '<h1 style="color : #9155fd" >Hello World!</h1>';
//   }
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() data : { name: string,age: number}){
        this.userService.create(data);
  }

}
