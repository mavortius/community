import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForumsModule } from './forums/forums.module';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: ChatListComponent, outlet: 'chat', canActivate: [ AuthGuardService ] },
  { path: 'users/:username', component: ChatComponent, outlet: 'chat', canActivate: [ AuthGuardService ] },
  { path: 'blogs', loadChildren: '../app/blogs/blogs.module#BlogsModule' },
  { path: '', redirectTo: '/forums', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ClarityModule,
    ForumsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
