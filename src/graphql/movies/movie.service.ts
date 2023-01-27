import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../../shared/services/custom-http.service';
import { MoviesArgs } from './dtos/movie.args.dto';
import { Movie } from './models/movie.model';
import { AddMovieInput, UpdateMovieInput } from './dtos/movie.input.dto';

@Injectable()
export class MovieService {
  constructor(private customHttpService: CustomHttpService) {}

  async findById(id: number): Promise<Movie> {
    const response = await this.customHttpService.get<Movie>(`movies/${id}`);
    return response.data;
  }

  async find(args: MoviesArgs): Promise<Movie[]> {
    const response = await this.customHttpService.get<Movie[]>(`movies`, {
      params: args,
    });
    return response.data;
  }

  async save(input: AddMovieInput): Promise<Movie> {
    const response = await this.customHttpService.post<Movie>('movies', input);
    return response.data;
  }

  async update(input: UpdateMovieInput): Promise<Movie> {
    const response = await this.customHttpService.put<Movie>(
      `movies/${input.id}`,
      input,
    );
    return response.data;
  }

  async delete(id: number) {
    await this.customHttpService.delete<Movie>(`movies/${id}`);
    return true;
  }
}
