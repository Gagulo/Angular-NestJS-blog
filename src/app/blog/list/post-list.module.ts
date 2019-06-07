import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostListModule { }
