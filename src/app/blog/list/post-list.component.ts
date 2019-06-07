import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public list = postList;
  constructor() { }

  ngOnInit() {
  }

}

const postList = [
  {
    title: 'xxx',
    subTitle: 'yyy',
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    conent: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'xxx',
    subTitle: 'yyy',
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    conent: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'xxx',
    subTitle: 'yyy',
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    conent: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'xxx',
    subTitle: 'yyy',
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    conent: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
];
