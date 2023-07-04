import { Observable } from 'rxjs';

export interface JokeResponse {
  id: number;
  joke: string;
  categories: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  safe: boolean;
  lang: string;
}

export interface IJokesAPI {
  getJoke(): Observable<JokeResponse>;
}
