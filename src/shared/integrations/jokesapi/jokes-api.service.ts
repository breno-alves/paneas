import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { IJokesAPI, JokeResponse } from './interfaces/jokes-api.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class JokesApiService implements IJokesAPI {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  getJoke() {
    return this.httpService
      .get<JokeResponse>(this.configService.get<string>('JOKES_API_URL'))
      .pipe(map((response) => response.data));
  }
}
