import { JokesService } from '../services/jokes.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { FavoriteDto } from './dtos/favorite.dto';

@Controller()
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post('favorite')
  create(@Body() dto: FavoriteDto) {
    return this.jokesService.create(dto);
  }

  @Get('joke')
  index() {
    return this.jokesService.index();
  }
}
