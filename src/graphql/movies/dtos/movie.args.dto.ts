import { PagingAndSortParam } from '../../../shared/dtos/search.query.dto';
import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class MoviesArgs extends PagingAndSortParam {
  @Field((type) => Int, { nullable: true })
  user_id?: number;
}
