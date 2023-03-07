import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CommonModule} from "@angular/common";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PostsComponent} from "./posts/posts.component";


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path:'posts',component:PostsComponent},
  {path:'**', component:NotFoundComponent},

//** last thing to come to-must be at the end of the routes
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
