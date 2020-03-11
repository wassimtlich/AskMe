import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../model/comment.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }
  saveComment(newComment: Comment) {
   return this.http.post('http://localhost:8085/comments/create', newComment);
  }
  updateComment(newComment: Comment) {
    return this.http.put('http://localhost:8085/comments/update', newComment);
  }

  getCommentsWithPostId(id: number) {
    return this.http.get('http://localhost:8085/comments/post/' + id);
  }

  deleteComment(id: number) {
    return  this.http.delete('http://localhost:8085/comments/delete/' + id);
  }

  getCommentById(id: number) {
    return this.http.get('http://localhost:8085/comments/find/' + id);
  }
}
