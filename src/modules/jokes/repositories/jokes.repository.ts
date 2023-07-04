import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { Joke } from '../schemas/joke.schema';
import { InjectModel } from '@nestjs/mongoose';
import { FavoriteDto } from '../controllers/dtos/favorite.dto';
import { IJokesRepository } from './interfaces/jokes.repository.interface';

export class JokesRepository implements IJokesRepository {
  constructor(
    @InjectModel(Joke.name) private readonly jokeModel: Model<Joke>,
  ) {}

  create(joke: FavoriteDto) {
    return this.jokeModel.create(joke);
  }

  findAll(filter: FilterQuery<Joke>, options: QueryOptions = {}) {
    return this.jokeModel.find(filter, {}, options);
  }

  findOne(filter: FilterQuery<Joke>, options: QueryOptions = {}) {
    return this.jokeModel.findOne(filter, {}, options);
  }
}
