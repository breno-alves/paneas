import { JokesApiMock } from '../../../shared/integrations/jokesapi/mocks/jokes-api.mock';
import { JokesRepositoryMock } from '../repositories/mocks/jokes.repository.mock';
import { IJokesAPI } from '../../../shared/integrations/jokesapi/interfaces/jokes-api.interface';
import { IJokesRepository } from '../repositories/interfaces/jokes.repository.interface';
import { plainToInstance } from 'class-transformer';
import { FavoriteDto } from '../controllers/dtos/favorite.dto';
import { JokesService } from './jokes.service';
import { lastValueFrom } from 'rxjs';

describe('Services - JokesService', () => {
  let jokesApiService: IJokesAPI;
  let jokesRepository: IJokesRepository;
  let jokesService: JokesService;

  beforeAll(() => {
    jokesApiService = new JokesApiMock();
    jokesRepository = new JokesRepositoryMock();
    jokesService = new JokesService(jokesApiService, jokesRepository);
  });

  it('should define jokes api', () => {
    expect(jokesApiService).toBeDefined();
  });

  it('should define jokes repository', () => {
    expect(jokesRepository).toBeDefined();
  });

  describe('Create', () => {
    it('should save a joke', async () => {
      const joke = plainToInstance(FavoriteDto, <FavoriteDto>{
        id: 1,
        category: 'category',
        type: 'type',
        setup: 'setup',
        delivery: 'delivery',
        joke: 'joke',
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        safe: true,
        lang: 'en',
      });
      const result = await jokesService.create(joke);

      expect(result).toBeDefined();
      expect(result.id).toBe(1);
    });
  });

  describe('Index', () => {
    it('should return a joke', async () => {
      const result = await lastValueFrom(await jokesService.index());
      expect(result).toBeDefined();
      expect(result.joke).toBeDefined();
    });
  });
});
