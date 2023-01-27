import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolvers';
import { GenreService } from '../genres/genre.service';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../users/user.service';

@Module({
  imports: [SharedModule],
  providers: [MovieService, GenreService, UserService, MovieResolver],
})
export class MovieModule {}
