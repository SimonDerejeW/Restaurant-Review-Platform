/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Restaurant, RestaurantDocument } from 'src/schemas/restaurant.schema';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
  ) {}

  async getRestaurants(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }

  async getRestaurant(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id).exec();
    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    return restaurant;
  }

  async createRestaurant(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    const newRestaurant = new this.restaurantModel(createRestaurantDto);
    return newRestaurant.save();
  }

  async updateRestaurant(
    id: string,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantModel
      .findByIdAndUpdate(id, updateRestaurantDto, { new: true })
      .exec();
    if (!restaurant) {
      throw new Error('Restaurant not found');
    }
    return restaurant;
  }

  async removeRestaurant(id: string): Promise<Restaurant> {
    const tobeRemoved = await this.restaurantModel.findById(id).exec();
    if (!tobeRemoved) {
      throw new Error('Restaurant not found');
    }

    await this.restaurantModel.findByIdAndDelete(id).exec();
    return tobeRemoved;
  }
}
