import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsService } from './services/blogs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlogComponent,
    BlogsComponent
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule {
}
