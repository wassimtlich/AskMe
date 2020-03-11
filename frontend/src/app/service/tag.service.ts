import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/Tag.model';
import {Observable, Subject} from 'rxjs';
import {Post} from '../model/post.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private http: HttpClient) {
  }

  saveTag(newTag: Tag) {
    return this.http.post('http://localhost:8085/Tags/create', newTag);
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('http://localhost:8085/Tags/findAll');}

  getTagsWithPostId(post: Post): Observable<Tag[]> {
     return this.http.get<Tag[]>('//localhost:8085/Tags/post/' + post.id);
  }

  deleteTag(id: number) {
    this.http.delete('http://localhost:8085/Tags/delete/' + id);
  }

  getTagById(id: number) {
    return this.http.get('http://localhost:8085/Tags/find/' + id);
  }
}
