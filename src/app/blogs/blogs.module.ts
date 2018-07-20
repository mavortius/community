import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsService } from './services/blogs.service';
import { BlogsRoutingModule } from './blogs.routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlogsRoutingModule
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
