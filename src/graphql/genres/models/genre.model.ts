import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Genre {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  created_at: string;

  @Field()
  updated_at: string;

  @Field({ nullable: true })
  deleted_at?: string;
}
