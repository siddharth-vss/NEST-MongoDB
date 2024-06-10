/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
// import { InjectConnection } from '@nestjs/mongoose';
// import { Connection } from 'mongoose';



@Injectable()
export class UserService {
    // constructor(@InjectConnection() private connection: Connection) {}
    constructor(@InjectModel('user') private userModel: Model<User>) {}

    async create(createUserDto: { name: string,age: number}): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        const result = await createdUser.save();
        return result;
      }
    
      async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
      }
    
}
