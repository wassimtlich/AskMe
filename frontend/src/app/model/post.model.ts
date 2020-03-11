import {User} from './user.model';
import {Tag} from './Tag.model';

export class Post {
  id: number;
  title: string;
  content: string;
  created_at: number;
  updated_at: number;
  ratingPoints: number;
  user: User;
  tags: Tag[];

  constructor(title: string, content: string, user: User, created_at: number,
              updated_at: number, ratingPoints: number = 0, tags: Tag[]) {
    this.title = title;
    this.content = content;
    this.user = user;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.ratingPoints = ratingPoints;
    this.tags = tags;
  }
}
