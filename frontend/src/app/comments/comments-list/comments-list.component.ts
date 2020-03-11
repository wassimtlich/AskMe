import {CommentService} from '../../service/comment.service';
import {Comment} from '../../model/comment.model';
import {PostDetailsComponent} from '../../posts/post-details/post-details.component';
import {AuthService} from '../../authentication/auth/auth.service';
import {User} from '../../model/user.model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  public comments: Comment[] = [];
  currentUser = {} as User;
  @ViewChild('f') addCommentForm: NgForm;


  constructor(private commentService: CommentService, private router: ActivatedRoute, private postDetailsComponent: PostDetailsComponent,
              private authService: AuthService) {
  }

  ngOnInit() {
    return this.commentService.getCommentsWithPostId(this.postDetailsComponent.id)
      .subscribe(
        (comments: any[]) => {
          this.comments = comments;
        },
        (error) => console.log(error)
      );
  }

  onEditComment(index: number) {
    const date = new Date();
    const updatedComment = new Comment(this.comments[index].content, this.currentUser, this.postDetailsComponent.post, this.comments[index].created_at, date.getDate());
    updatedComment.id = this.comments[index].id;
    this.commentService.updateComment(updatedComment).subscribe(com => console.log(com));
    console.log(updatedComment);
  }
  onAddComment() {
    const date = new Date();
    const value = this.addCommentForm.value;
    const newComment = new Comment(value.content, this.currentUser, this.postDetailsComponent.post, date.getDate(), date.getDate());
    if (newComment.content !== '') {
      this.commentService.saveComment(newComment).subscribe(
        (comment: Comment) => {
          console.log(comment);
          this.comments.push(comment);
        }
      );
    }
    console.log(newComment); }
  onDeleteComment(comment: Comment) {
    console.log(this.comments.indexOf(comment));
    console.log(this.comments[this.comments.indexOf(comment)]);

    this.commentService.deleteComment(comment.id).subscribe(
      (comm: Comment) => {
        this.comments.splice(this.comments.indexOf(comment), 1);
      }
    );
  }
}
