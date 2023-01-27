import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PagingAndSortParam {
  @Field((type) => Int, { nullable: true })
  p?: number;

  @Field((type) => Int, { nullable: true })
  rc?: number;

  @Field({ nullable: true })
  s?: string;
}
