import { Joke, JokeDocument } from '../../schemas/joke.schema';
import { FavoriteDto } from '../../controllers/dtos/favorite.dto';
import { FilterQuery, QueryOptions } from 'mongoose';

export interface IJokesRepository {
  create(joke: FavoriteDto): Promise<JokeDocument>;
  findAll(
    filter: FilterQuery<Joke>,
    options: QueryOptions,
  ): Promise<JokeDocument[]>;
  findOne(
    filter: FilterQuery<Joke>,
    options: QueryOptions,
  ): Promise<JokeDocument>;
}
