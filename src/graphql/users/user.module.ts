import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { MovieService } from '../movies/movie.service';
import { SharedModule } from '../../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [UserResolver, UserService, MovieService],
})
export class UserModule {}
