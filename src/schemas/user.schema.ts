/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required : true,type : String})
  name: string;

  @Prop({type : Number})
  age: number;


}

export const UserSchema = SchemaFactory.createForClass(User);
