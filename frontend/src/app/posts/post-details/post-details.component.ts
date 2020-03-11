import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post} from '../../model/post.model';
import {AuthService} from '../../authentication/auth/auth.service';
import {TagService} from '../../service/tag.service';
import {Tag} from '../../model/Tag.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post = {} as Post;
  id: number;
  constructor(private postService: PostService, private  route: Router, private router: ActivatedRoute, private authService: AuthService, private tagService: TagService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.postUp();
  }

  postUp() {
    this.router.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.postService.getPostById(this.id)
          .subscribe(
            (data: Post) => {
              this.post = data;
              console.log(this.post);
              console.log(this.post);
              this.tagService.getTagsWithPostId(this.post).subscribe((tags) => {this.post.tags = tags ; console.log(tags) ; });
            },
            (error) => console.log(error)
          );
      }
    );

  }
  onLike() {
    this.postService.likePost(this.id).subscribe(
      (response: boolean) => {
        if (response) {
          this.post.ratingPoints ++;
        }
      }
    );
  }

  onDislike() {
    this.postService.unlikePost(this.id).subscribe(
      (response: boolean) => {
        if (response) {
          this.post.ratingPoints --;
        }
      }
    );
  }

  onDeletePost() {
    this.postService.deletePost(this.id).subscribe(
      () => {
        this.toastr.success('Votre post a éte supprimé avec succès');
        this.route.navigate(['/posts-list']);
      }
    );;
  }
}
