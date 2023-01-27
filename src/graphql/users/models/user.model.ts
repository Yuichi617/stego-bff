import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Movie } from '../../movies/models/movie.model';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  password?: string;

  @Field((type) => Int)
  role: number;

  @Field()
  created_at: string;

  @Field()
  updated_at: string;

  @Field({ nullable: true })
  deleted_at?: string;

  @Field((type) => [Movie])
  movies: Movie[];
}
