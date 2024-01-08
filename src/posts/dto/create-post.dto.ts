import { PostStatus } from '../entities/post.entity';
import { IsNotEmpty, Length, Max } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @Length(1, 255)
  readonly title: string;

  @IsNotEmpty()
  @Length(1, 255)
  readonly slug: string;

  @IsNotEmpty()
  readonly body: string;

  readonly status: PostStatus;
}
