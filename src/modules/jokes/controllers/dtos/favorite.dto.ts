import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class Flags {
  @IsBoolean()
  @ApiProperty()
  readonly nsfw: boolean;

  @IsBoolean()
  @ApiProperty()
  readonly religious: boolean;

  @IsBoolean()
  @ApiProperty()
  readonly political: boolean;

  @IsBoolean()
  @ApiProperty()
  readonly racist: boolean;

  @IsBoolean()
  @ApiProperty()
  readonly sexist: boolean;

  @IsBoolean()
  @ApiProperty()
  readonly explicit: boolean;
}

export class FavoriteDto {
  @IsNumber()
  @ApiProperty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly joke: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  readonly setup?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  readonly delivery?: string;

  @ValidateNested()
  @ApiProperty()
  readonly flags: Flags;

  @IsBoolean()
  @ApiProperty()
  readonly safe: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lang: string;
}
