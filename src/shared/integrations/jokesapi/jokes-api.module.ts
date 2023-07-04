import { HttpModule } from '@nestjs/axios';
import JokesApiService from './jokes-api.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  providers: [JokesApiService],
  exports: [JokesApiService],
})
export class JokesApiModule {}
