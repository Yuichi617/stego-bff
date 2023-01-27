import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

@InputType()
export class AddUserInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(255)
  password?: string;
}

@InputType()
export class UpdateUserInput {
  @Field((type) => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(255)
  password?: string;
}
