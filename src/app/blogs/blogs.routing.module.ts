import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: ':post_id', component: BlogComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BlogsRoutingModule {
}
