/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from 'src/schemas/restaurant.schema';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async getRestaurants():Promise<Restaurant[]> {
    return this.restaurantService.getRestaurants();
  }

  @Get(':id')
  async getRestaurant(@Param('id') id: string):Promise<Restaurant> {
    try {
      return this.restaurantService.getRestaurant(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  @Post()
  async createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto):Promise<Restaurant> {
    return this.restaurantService.createRestaurant(createRestaurantDto);
  }

  @Put(':id')
  async updateRestaurant(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.updateRestaurant(id, updateRestaurantDto);
  }

  @Delete(':id')
  async removeRestaurant(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.removeRestaurant(id);
  }
}
