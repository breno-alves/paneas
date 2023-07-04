import { plainToInstance } from 'class-transformer';
import { FavoriteDto } from './favorite.dto';
import { validate } from 'class-validator';
import { faker } from '@faker-js/faker';

describe('DTO - FavoriteDto', () => {
  it('should have no issue when correct dto is inputted', async () => {
    const dto = plainToInstance(FavoriteDto, <FavoriteDto>{
      id: faker.number.int(),
      category: faker.string.sample({ min: 1, max: 10 }),
      type: faker.string.sample({ min: 1, max: 10 }),
      setup: faker.string.sample({ min: 1, max: 10 }),
      delivery: faker.string.sample({ min: 1, max: 10 }),
      joke: faker.string.sample({ min: 1, max: 50 }),
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
    const errors = await validate(dto);
    expect(errors).toHaveLength(0);
  });

  it('should not accept empty category', async () => {
    const dto = plainToInstance(FavoriteDto, <FavoriteDto>{
      id: faker.number.int(),
      category: '',
      type: faker.string.sample({ min: 1, max: 10 }),
      setup: faker.string.sample({ min: 1, max: 10 }),
      delivery: faker.string.sample({ min: 1, max: 10 }),
      joke: faker.string.sample({ min: 1, max: 50 }),
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
    const errors = await validate(dto);
    expect(errors).toHaveLength(1);
    expect(errors[0].property).toBe('category');
  });

  it('should not accept empty type', async () => {
    const dto = plainToInstance(FavoriteDto, <FavoriteDto>{
      id: faker.number.int(),
      category: faker.string.sample({ min: 1, max: 10 }),
      type: '',
      setup: faker.string.sample({ min: 1, max: 10 }),
      delivery: faker.string.sample({ min: 1, max: 10 }),
      joke: faker.string.sample({ min: 1, max: 50 }),
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
    const errors = await validate(dto);
    expect(errors).toHaveLength(1);
    expect(errors[0].property).toBe('type');
  });

  it('should not accept empty joke', async () => {
    const dto = plainToInstance(FavoriteDto, <FavoriteDto>{
      id: faker.number.int(),
      category: faker.string.sample({ min: 1, max: 10 }),
      type: faker.string.sample({ min: 1, max: 10 }),
      setup: faker.string.sample({ min: 1, max: 10 }),
      delivery: faker.string.sample({ min: 1, max: 10 }),
      joke: '',
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
    const errors = await validate(dto);
    expect(errors).toHaveLength(1);
    expect(errors[0].property).toBe('joke');
  });

  it('should not accept empty delivery', async () => {
    const dto = plainToInstance(FavoriteDto, <FavoriteDto>{
      id: faker.number.int(),
      category: faker.string.sample({ min: 1, max: 10 }),
      type: faker.string.sample({ min: 1, max: 10 }),
      setup: faker.string.sample({ min: 1, max: 10 }),
      delivery: '',
      joke: faker.string.sample({ min: 1, max: 10 }),
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
    const errors = await validate(dto);
    expect(errors).toHaveLength(1);
    expect(errors[0].property).toBe('delivery');
  });
});
