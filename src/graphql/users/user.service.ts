import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../../shared/services/custom-http.service';
import { User } from './models/user.model';
import { AddUserInput, UpdateUserInput } from './dtos/user.input.dto';

@Injectable()
export class UserService {
  constructor(private customHttpService: CustomHttpService) {}

  async findById(id: number): Promise<User> {
    const response = await this.customHttpService.get<User>(`users/${id}`);
    return response.data;
  }

  async find(): Promise<User[]> {
    const response = await this.customHttpService.get<User[]>(`users`);
    return response.data;
  }

  async save(input: AddUserInput): Promise<User> {
    const response = await this.customHttpService.post<User>('users', input);
    return response.data;
  }

  async update(input: UpdateUserInput): Promise<User> {
    const response = await this.customHttpService.put<User>(
      `users/${input.id}`,
      input,
    );
    return response.data;
  }

  async delete(id: number) {
    await this.customHttpService.delete<User>(`users/${id}`);
    return true;
  }
}
