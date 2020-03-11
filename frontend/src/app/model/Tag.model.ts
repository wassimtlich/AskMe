import {Post} from './post.model';

export class Tag {
  id: number;
  name: string;
  post: Post;

  constructor();
  constructor(tag?: any) {
    this.name = tag && tag.name || '';
    this.post = tag && tag.post || '';
  }
}
