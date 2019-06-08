import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from './models/model';
import { PostResourcesService } from './post-resources.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postResource: PostResourcesService) { }

  public getAllPosts(): Observable<PostModel[]> {
    return this.postResource.findAll();
  }
}
