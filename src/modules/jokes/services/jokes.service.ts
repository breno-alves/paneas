import { Inject, Injectable } from '@nestjs/common';
import { FavoriteDto } from '../controllers/dtos/favorite.dto';
import { IJokesAPI } from '../../../shared/integrations/jokesapi/interfaces/jokes-api.interface';
import { IJokesRepository } from '../repositories/interfaces/jokes.repository.interface';
import JokesApiService from '../../../shared/integrations/jokesapi/jokes-api.service';
import { JokesRepository } from '../repositories/jokes.repository';

@Injectable()
export class JokesService {
  constructor(
    @Inject(JokesApiService) private readonly jokesApiService: IJokesAPI,
    @Inject(JokesRepository) private readonly jokesRepository: IJokesRepository,
  ) {}

  async create(dto: FavoriteDto) {
    return this.jokesRepository.create(dto);
  }

  async index() {
    return this.jokesApiService.getJoke();
  }
}
