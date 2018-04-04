import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ForumComponentComponent } from './forum-component/forum-component.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { Sub_Routes } from './forumSubRoute';
import { ExploreComponent } from './explore/explore.component';
import { TopicServiceService } from './topic-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ForumComponentComponent,
    CreateTopicComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'forum/:username',
        component:ForumComponentComponent,
        children: Sub_Routes
      },
      {
        path:'**',
        component:LoginComponentComponent
      }
    ])
  ],
  providers: [TopicServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
