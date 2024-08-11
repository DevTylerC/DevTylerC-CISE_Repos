import { IsString, IsDate } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  isbn: string;

  @IsString()
  author: string;

  @IsString()
  description: string;

  @IsDate()
  published_date: Date;

  @IsString()
  publisher: string;
}
