import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public list;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.list = this.postService.getAllPosts();
  }

}
