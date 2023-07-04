import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class Flags {
  @IsBoolean()
  readonly nsfw: boolean;

  @IsBoolean()
  readonly religious: boolean;

  @IsBoolean()
  readonly political: boolean;

  @IsBoolean()
  readonly racist: boolean;

  @IsBoolean()
  readonly sexist: boolean;

  @IsBoolean()
  readonly explicit: boolean;
}

export class FavoriteDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly joke: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly setup?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly delivery?: string;

  @ValidateNested()
  readonly flags: Flags;

  @IsBoolean()
  readonly safe: boolean;

  @IsString()
  @IsNotEmpty()
  readonly lang: string;
}
