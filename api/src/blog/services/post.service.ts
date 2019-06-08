import { Injectable } from '@nestjs/common';
import { PostModel } from '../models/post-model';
import { Observable, of } from 'rxjs';
import { mockData } from '../mock-data/mock';

@Injectable()
export class PostService {
    public findAll(): Observable<PostModel[]> {
        return of(mockData);
    };
}
