import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { IPost } from '../interfaces/post.interface';
import { PostsService } from '../services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}
  @Get()
  getAllPosts(@Req() request: Request): Array<IPost> {
    console.info(request.header.name, '===> Request');

    return [];
  }
}
