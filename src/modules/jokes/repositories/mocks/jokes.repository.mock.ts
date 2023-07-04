import { IJokesRepository } from '../interfaces/jokes.repository.interface';
import { FilterQuery, QueryOptions } from 'mongoose';
import { Joke, JokeDocument } from '../../schemas/joke.schema';
import { FavoriteDto } from '../../controllers/dtos/favorite.dto';

const JokesFactory = () => {
  return (<unknown>{
    id: 1,
    joke: 'Chuck Norris can divide by zero.',
    createdAt: new Date(),
    updatedAt: new Date(),
    categories: 'nerdy',
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    safe: true,
    land: 'br',
  }) as JokeDocument;
};

export class JokesRepositoryMock implements IJokesRepository {
  private db: Array<JokeDocument> = [];

  create(joke: FavoriteDto): Promise<JokeDocument> {
    const jokeDocument = JokesFactory();
    this.db.push(jokeDocument);
    return Promise.resolve(jokeDocument);
  }

  findOne(
    filter: FilterQuery<Joke>,
    options: QueryOptions,
  ): Promise<JokeDocument> {
    const findJoke = this.db.find((joke) => joke.id === filter.id);
    return Promise.resolve(findJoke);
  }

  findAll(
    filter: FilterQuery<Joke>,
    options: QueryOptions,
  ): Promise<JokeDocument[]> {
    if (filter) {
      return Promise.resolve(this.db.filter((joke) => joke.id === filter.id));
    }
    return Promise.resolve(this.db);
  }
}
