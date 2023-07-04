import { JokesService } from '../services/jokes.service';
import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { FavoriteDto } from './dtos/favorite.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Joke } from '../schemas/joke.schema';

@ApiTags('jokes')
@Controller()
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post('favorite')
  @ApiCreatedResponse({
    description: 'successful creation of a new joke',
    type: Joke,
    status: HttpStatus.CREATED,
  })
  create(@Body() dto: FavoriteDto) {
    return this.jokesService.create(dto);
  }

  @Get('joke')
  @ApiCreatedResponse({
    type: Joke,
    status: HttpStatus.OK,
  })
  index() {
    return this.jokesService.index();
  }
}
