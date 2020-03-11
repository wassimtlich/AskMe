import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PostService} from './post.service';
import {Post} from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private postService: PostService;

  constructor(postService: PostService) {
    this.postService = postService;
  }
  private listTags = new BehaviorSubject<any[]>([]);
  tagsList = this.listTags.asObservable();

  sharedListTags(tag) {
    this.listTags.next(tag);
  }
}
