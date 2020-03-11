import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/post.model';
import {PostService} from '../../service/post.service';
import {AuthService} from '../../authentication/auth/auth.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../authentication/auth/token-storage.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[];
  post: Post;
  authority: string;
  private roles: string[];
  constructor(private postService: PostService, private authService: AuthService, private router: Router, private tokenStorage:TokenStorageService
  ) {
  }

  ngOnInit() {
    this.getPostsUp();
    this.authorize();
  }

  getPostsUp() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.postService.postsData = posts;
    });
  }

  onSelectedOption(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.postService.searchOption.length > 0) {
      this.posts = this.postService.filteredListOptions();
    } else {
      this.posts = this.postService.postsData;
    }
    console.log(this.posts);


  }
  authorize() { if (this.tokenStorage.getToken()) {
    this.roles = this.tokenStorage.getAuthorities();
    this.roles.every(role => {
      if (role === 'ROLE_ADMIN') {
        this.authority = 'admin';
        return false;
      } else if (role === 'ROLE_PM') {
        this.authority = 'pm';
        return false;
      }
      this.authority = 'user';
      return true;
    });
  }}

}
