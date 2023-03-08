import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
// import {constructor} from "zone.js";
import {Post} from "../models";
import {POSTS} from "../fake-db";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{

  post : Post;
  constructor(private route: ActivatedRoute,
              // private postService: PistService
              ) {
    this.post= {} as Post;
  }
  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // if(id){
    //   let num_id=+id;
    // }
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.post=POSTS.find((post: Post) => post.id === id) as Post;
    })


  }

}

