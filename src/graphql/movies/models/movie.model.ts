import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Genre } from '../../genres/models/genre.model';
import { User } from '../../users/models/user.model';

@ObjectType()
export class Movie {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  user_id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  comment?: string;

  @Field((type) => Int)
  eval: number;

  @Field((type) => Int)
  genre_id: number;

  @Field((type) => Int)
  display_flag: number;

  @Field()
  created_at: string;

  @Field()
  updated_at: string;

  @Field({ nullable: true })
  deleted_at?: string;

  @Field((types) => Genre)
  genre: Genre;

  @Field((types) => User)
  user: User;
}
