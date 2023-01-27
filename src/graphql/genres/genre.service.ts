import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../../shared/services/custom-http.service';
import { Genre } from './models/genre.model';

@Injectable()
export class GenreService {
  constructor(private customHttpService: CustomHttpService) {}

  async findAll(): Promise<Genre[]> {
    const response = await this.customHttpService.get<Genre[]>('genres');
    return response.data;
  }

  async findById(id: number): Promise<Genre> {
    const response = await this.customHttpService.get<Genre>(`genres/${id}`);
    return response.data;
  }
}
