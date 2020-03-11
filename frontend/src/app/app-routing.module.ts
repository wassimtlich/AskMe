import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './authentication/home/home.component';
import { UserComponent } from './authentication/user/user.component';
import { AdminComponent } from './authentication/admin/admin.component';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {PostsAddComponent} from './posts/posts-add/posts-add.component';
import {PostDetailsComponent} from './posts/post-details/post-details.component';
import {PostEditComponent} from './posts/post-edit/post-edit.component';
import {TagAddComponent} from './tags/tag-add/tag-add.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
  {path: 'posts-list', component: PostsListComponent},
  {path: 'posts-add', component: PostsAddComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'tag-add', component: TagAddComponent},
  {path: 'posts/edit/:id', component: PostEditComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
