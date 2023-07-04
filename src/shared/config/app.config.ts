interface Config {
  app: {
    env: string;
    port: number;
  };
  database: {
    uri: string;
  };
  integrations: {
    jokeApi: {
      url: string;
    };
  };
}

export default function configuration(): Config {
  return {
    app: {
      env: process.env.NODE_ENV ?? 'development',
      port: +process.env.APP_PORT ?? 3000,
    },
    database: {
      uri: process.env.DATABASE_URI ?? 'mongodb://db:27017/jokes',
    },
    integrations: {
      jokeApi: {
        url: process.env.JOKES_API_URL ?? 'https://v2.jokeapi.dev/joke/any',
      },
    },
  };
}
