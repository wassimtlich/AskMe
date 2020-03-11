import {Post} from './post.model';
import {User} from './user.model';

export class Comment {
  id: number;
  content: string;
  created_at: number;
  updated_at: number;
  user: User;
  post: Post;

  constructor(content: string, user: User, post: Post, created_at: number, updated_at: number) {
    this.content = content;
    this.user = user;
    this.post = post;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
