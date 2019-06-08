import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostModel } from './models/post-model';
import { PostService } from './services/post.service';

@Controller('blog')
export class PostController {

    constructor(private postService: PostService) {}
    @Get()
    findAll(): Observable<PostModel[]> {
        return this.postService.findAll();
    }
}
