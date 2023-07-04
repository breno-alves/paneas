import { IJokesAPI, JokeResponse } from '../interfaces/jokes-api.interface';
import { Observable } from 'rxjs';

export class JokesApiMock implements IJokesAPI {
  getJoke(): Observable<JokeResponse> {
    return new Observable((subscriber) => {
      subscriber.next({
        id: 1,
        joke: 'This is a joke',
        categories: 'teste',
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
      subscriber.complete();
    });
  }
}
