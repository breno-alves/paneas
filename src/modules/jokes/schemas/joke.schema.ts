import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTimestampsConfig } from 'mongoose';

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
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  joke: string;

  @Prop()
  setup?: string;

  @Prop()
  delivery?: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true, type: Flags })
  flags: Flags;

  @Prop({ required: true })
  safe: boolean;

  @Prop({ required: true })
  lang: string;
}

export type JokeDocument = HydratedDocument<Joke> & SchemaTimestampsConfig;

export const JokeSchema = SchemaFactory.createForClass(Joke);
