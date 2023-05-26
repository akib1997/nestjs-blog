import { Injectable } from '@nestjs/common';
import { IPost } from '../interfaces/post.interface';

@Injectable()
export class PostsService {
  private readonly posts: IPost[] = [];

  getAllPosts(): IPost[] {
    return [];
  }
}
