import {Injectable} from '@angular/core';
import {Post} from '../model/post.model';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  searchOption = [];
  public postsData: Post[];
  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get<Post[]>('http://localhost:8085/posts/findAll');
  }
  savePost(newPost: Post) {
    return this.http.post('http://localhost:8085/posts/save', newPost);
  }

  getPostById(id: number) {
    return this.http.get('http://localhost:8085/posts/find/' + id);
  }

  likePost(id: number) {
    return this.http.post('http://localhost:8085/posts/like/' + id, id);
  }

  unlikePost(id: number) {
    return this.http.post('http://localhost:8085/posts/unlike/' + id, id);
  }

  deletePost(id: number) {
    return this.http.delete('http://localhost:8085/posts/delete/' + id);
  }


  updatePost(updatedPost: Post, id: number) {
    console.log(updatedPost);
    return this.http.put('http://localhost:8085/posts/update/', updatedPost);



  }
  filteredListOptions() {
    const posts = this.postsData;
    const filteredPostsList = [];
    for (const post of posts) {
      for (const options of this.searchOption) {
        if (options.title === post.title) {
          filteredPostsList.push(post);
        }
      }
    }
    console.log(filteredPostsList);
    return filteredPostsList;
  }
}


