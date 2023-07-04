import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTimestampsConfig } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Flags {
  @Prop({ required: true })
  nsfw: boolean;

  @Prop({ required: true })
  religious: boolean;

  @Prop({ required: true })
  political: boolean;

  @Prop({ required: true })
  racist: boolean;

  @Prop({ required: true })
  sexist: boolean;

  @Prop({ required: true })
  explicit: boolean;
}

@Schema({ timestamps: true, collection: 'jk__jokes' })
export class Joke {
  @ApiProperty()
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  @ApiProperty()
  type: string;

  @Prop({ required: true })
  @ApiProperty()
  joke: string;

  @Prop()
  @ApiPropertyOptional()
  setup?: string;

  @Prop()
  @ApiPropertyOptional()
  delivery?: string;

  @Prop({ required: true })
  @ApiProperty()
  category: string;

  @Prop({ required: true, type: Flags })
  @ApiProperty()
  flags: Flags;

  @Prop({ required: true })
  @ApiProperty()
  safe: boolean;

  @Prop({ required: true })
  @ApiProperty()
  lang: string;
}

export type JokeDocument = HydratedDocument<Joke> & SchemaTimestampsConfig;

export const JokeSchema = SchemaFactory.createForClass(Joke);
