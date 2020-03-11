import {PostService} from '../../service/post.service';
import {Post} from '../../model/post.model';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';
import {TagService} from '../../service/tag.service';
import {SharedService} from 'src/app/service/shared.service';
import {ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Component, NgModule, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.css']
})
@NgModule({
  imports: [BrowserAnimationsModule]
})
export class PostsAddComponent implements OnInit {
  @ViewChild('f') addPostForm: NgForm;
  currentUser = {} as User;
  public tags: any;
  show = false;
  public dropdownSettings: any = {};
  selectedItems: any[] = [];

  constructor(
    private postService: PostService,
    private userService: UserService,
    private router: Router,
    private tagService: TagService,
    private sharedService: SharedService,
    private toastr: ToastrService) {
  }

  ngOnInit() {
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
    this.selectedItems.push(event);

  }
  onAddPost() {
    const date = new Date();
    const value = this.addPostForm.value;
    const newPost = new Post(
      value.title,
      value.content,
      this.currentUser,
      date.getDate(),
      date.getDate(),
      0,
      this.selectedItems
    );
    this.postService.savePost(newPost).subscribe(
      (response: Response) => {
        this.toastr.success('Votre post a éte publié avec succès');
      }
    );
    this.router.navigate(['/posts-list']);
  }

  isShow() {
    this.show = !this.show;
  }
}
