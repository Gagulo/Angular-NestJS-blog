import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListModule } from './list/post-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostListModule
  ],
  exports: [
    PostListModule
  ]
})
export class BlogModule { }
