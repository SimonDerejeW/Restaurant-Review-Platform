/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PrimaryGeneratedColumn } from 'typeorm';


export type RestaurantDocument = HydratedDocument<Restaurant>;


@Schema()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  location: string;

  @Prop()
  contact: string;

  @Prop()
  openingTime: string;

  @Prop()
  closingTime: string;
}




export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);