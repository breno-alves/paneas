import { Module } from '@nestjs/common';
import { JokesApiModule } from './shared/integrations/jokesapi/jokes-api.module';
import { JokesModule } from './modules/jokes/jokes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HealthModule } from './shared/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          uri: configService.get<string>('MONGO_URI'),
        };
      },
    }),
    JokesApiModule,
    JokesModule,
    HealthModule,
  ],
})
export class AppModule {}
