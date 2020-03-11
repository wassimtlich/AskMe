import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserComponent } from './authentication/user/user.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './authentication/home/home.component';
import { AdminComponent } from './authentication/admin/admin.component';
import { httpInterceptorProviders } from './authentication/auth/auth-interceptor';
import { CommentAddComponent } from './comments/comment-add/comment-add.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostsAddComponent } from './posts/posts-add/posts-add.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {

  MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule


} from '@angular/material';
import {RouterModule} from '@angular/router';
import { TagAddComponent } from './tags/tag-add/tag-add.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {SearchBarComponent} from './posts/posts-list/search-bar/search-bar.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    CommentAddComponent,
    CommentsListComponent,
    CommentsComponent,
    PostsComponent,
    PostDetailsComponent,
    PostEditComponent,
    PostsAddComponent,
    PostsListComponent,

    TagAddComponent,
    SearchBarComponent
  ]
  , imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatIconModule, MatInputModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatFormFieldModule,
        BrowserAnimationsModule, NgSelectModule, NgMultiSelectDropDownModule.forRoot(), ToastrModule.forRoot()],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
