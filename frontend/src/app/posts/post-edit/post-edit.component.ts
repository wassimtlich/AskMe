import {PostService} from '../../service/post.service';
import {Post} from '../../model/post.model';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';
import {TagService} from '../../service/tag.service';
import {SharedService} from '../../service/shared.service';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  @ViewChild('f') addPostForm: NgForm;
  editedPost = {} as Post;
  id: number;
  i: any;
  show = false;
  public tags: any;
  selectedItems: any[] = [];
  public dropdownSettings: any = {};
  currentUser = {} as User;
  constructor(private postService: PostService, private userService: UserService, private route: ActivatedRoute, private router: Router, private tagService: TagService, private sharedService: SharedService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.postService.getPostById(this.id)
          .subscribe(
            (data: Post) => {
              this.editedPost = data;
              this.currentUser = data.user;
            },
            (error) => console.log(error)
          );
      }
    );
    this.tags = this.tagService.getTags().subscribe(tags => {
      this.sharedService.sharedListTags(tags);
    });
    this.sharedService.tagsList.subscribe(tags => {
      this.tags = tags;
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField : 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
  }

    onItemSelect(event: any) {
      this.selectedItems.push(event)
      console.log(this.selectedItems);
  }

  onEditPost() {
    const value = this.addPostForm.value;
    const updatedPost = {} as Post;
    updatedPost.id = this.id;
    updatedPost.title = value.title.toString();
    updatedPost.created_at = this.editedPost.created_at;
    updatedPost.content = value.content.toString();
    updatedPost.ratingPoints = this.editedPost.ratingPoints;
    updatedPost.user = this.currentUser;
    updatedPost.tags = this.selectedItems ;
    /*
    for (let i = 0; i < this.selectedItems.length; i++)
    {
      updatedPost.tags.push(this.selectedItems[i]);

    }*/
    console.log(updatedPost)
    this.postService.updatePost(updatedPost, updatedPost.id).subscribe(post => {        this.toastr.success('Votre post a éte modifié avec succès');
      this.router.navigate(['posts-list']) ; });

  }
  isShow() {
    this.show = !this.show;
  }
}
