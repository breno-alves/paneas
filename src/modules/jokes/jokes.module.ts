import { Module } from '@nestjs/common';
import { JokesController } from './controllers/jokes.controller';
import { JokesService } from './services/jokes.service';
import { JokesApiModule } from '../../shared/integrations/jokesapi/jokes-api.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Joke, JokeSchema } from './schemas/joke.schema';
import { JokesRepository } from './repositories/jokes.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }]),
    JokesApiModule,
  ],
  controllers: [JokesController],
  providers: [JokesService, JokesRepository],
})
export class JokesModule {}
