import { Movie } from './models/movie.model';
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { MovieService } from './movie.service';
import { GenreService } from '../genres/genre.service';
import { MoviesArgs } from './dtos/movie.args.dto';
import { UserService } from '../users/user.service';
import { AddMovieInput, UpdateMovieInput } from './dtos/movie.input.dto';

@Resolver((of) => Movie)
export class MovieResolver {
  constructor(
    private movieService: MovieService,
    private genreService: GenreService,
    private userService: UserService,
  ) {}

  @Query((returns) => Movie)
  async movie(@Args('id', { type: () => Int }) id: number) {
    return this.movieService.findById(id);
  }

  @Query((returns) => [Movie])
  async movies(@Args() args: MoviesArgs) {
    return this.movieService.find(args);
  }

  @ResolveField()
  async genre(@Parent() movie: Movie) {
    const { genre_id } = movie;
    return this.genreService.findById(genre_id);
  }

  @ResolveField()
  async user(@Parent() movie: Movie) {
    const { user_id } = movie;
    return this.userService.findById(user_id);
  }

  @Mutation((returns) => Movie)
  async addMovie(@Args('addMovieInput') input: AddMovieInput) {
    return this.movieService.save(input);
  }

  @Mutation((returns) => Movie)
  async updateMovie(@Args('updateMovieInput') input: UpdateMovieInput) {
    return this.movieService.update(input);
  }

  @Mutation((returns) => Boolean)
  async deleteMovie(@Args('id', { type: () => Int }) id: number) {
    return this.movieService.delete(id);
  }
}
