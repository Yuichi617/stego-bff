import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  MaxLength,
} from 'class-validator';

@InputType()
export class AddMovieInput {
  @Field((type) => Int)
  @IsNotEmpty()
  @IsInt()
  user_id: number;

  @Field()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(255)
  comment?: string;

  @Field((type) => Int)
  @IsNotEmpty()
  @IsInt()
  @IsIn([1, 2, 3, 4, 5])
  eval: number;

  @Field((type) => Int)
  @IsNotEmpty()
  @IsInt()
  genre_id: number;
}

@InputType()
export class UpdateMovieInput {
  @Field((type) => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field((type) => Int)
  @IsNotEmpty()
  @IsInt()
  user_id: number;

  @Field()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(255)
  comment?: string;

  @Field((type) => Int)
  @IsNotEmpty()
  @IsInt()
  @IsIn([1, 2, 3, 4, 5])
  eval: number;

  @Field((type) => Int)
  @IsNotEmpty()
  @IsInt()
  genre_id: number;
}
