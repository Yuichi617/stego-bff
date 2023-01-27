import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { MovieService } from '../movies/movie.service';
import { User } from './models/user.model';
import { UserService } from './user.service';
import { MoviesArgs } from '../movies/dtos/movie.args.dto';
import { AddUserInput, UpdateUserInput } from './dtos/user.input.dto';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private movieService: MovieService,
  ) {}

  @Query((returns) => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findById(id);
  }

  @Query((returns) => [User])
  async users() {
    return this.userService.find();
  }

  @ResolveField()
  async movies(@Parent() user: User) {
    const { id } = user;
    const params = new MoviesArgs();
    params.user_id = id;
    return this.movieService.find(params);
  }

  @Mutation((returns) => User)
  async addUser(@Args('addUserInput') input: AddUserInput) {
    return this.userService.save(input);
  }

  @Mutation((returns) => User)
  async updateUser(@Args('updateUserInput') input: UpdateUserInput) {
    return this.userService.update(input);
  }

  @Mutation((returns) => Boolean)
  async deleteUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.delete(id);
  }
}
