import {Component, OnInit} from '@angular/core';
import {Post} from "../models";
import {POSTS} from "../fake-db";
import {PostService} from "../post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: Post[];

  constructor(private postService: PostService) {
    this.posts= [];
  }
  ngOnInit(): void {
    // this.posts=POSTS;
    this.postService.getPosts().subscribe((posts) => {
      this.posts=posts;
    });
  }

}
