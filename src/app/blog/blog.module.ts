import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListModule } from './list/post-list.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'app/shared/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostListModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    PostListModule
  ]
})
export class BlogModule { }
