import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from '../../model/post.model';
import {User} from '../../model/user.model';
import {CommentService} from '../../service/comment.service';
import {Comment} from '../../model/comment.model';
import {PostService} from '../../service/post.service';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {PostDetailsComponent} from '../../posts/post-details/post-details.component';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {
  @ViewChild('f') addCommentForm: NgForm;
  post = {} as Post;
  id: number;
  currentUser = {} as User;
  comments: Comment[] = [];
  constructor(private commentService: CommentService, private postService: PostService, private userService: UserService, private router: ActivatedRoute,
              private postDetailsComponent: PostDetailsComponent) {
  }

  ngOnInit() {

  }

  onAddComment() {
    const date = new Date();
    const value = this.addCommentForm.value;
    const newComment = new Comment(value.content, this.currentUser, this.postDetailsComponent.post, date.getDate(), date.getDate());
    console.log(this.postDetailsComponent.post);
    if (newComment.content !== '') {
      this.commentService.saveComment(newComment).subscribe(
        (response: Response) => {
          this.comments.push(newComment);
        }
      );
    }}
}
