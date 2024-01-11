import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtService, AuthGuard],
})
export class UsersModule {}
