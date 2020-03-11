import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from '../../model/post.model';
import {PostService} from '../../service/post.service';
import {ActivatedRoute} from '@angular/router';
import {Tag} from '../../model/Tag.model';
import {TagService} from '../../service/tag.service';
import {SharedService} from 'src/app/service/shared.service';

@Component({
  selector: 'app-tag-add',
  templateUrl: './tag-add.component.html',
  styleUrls: ['./tag-add.component.css']
})
export class TagAddComponent implements OnInit {
  @ViewChild('f') addTagForm: NgForm;
  post = {} as Post;
  public tags: any;
  public exist: boolean ;
  constructor(
    private tagService: TagService,
    private postService: PostService,
    private router: ActivatedRoute,
    private sharedService: SharedService
  ) {
  }

  ngOnInit() {
    this.sharedService.tagsList.subscribe(tags => {
      this.tags = tags;
    });
  }

  onAddTag() {
    const value = this.addTagForm.value;
    const newTag = new Tag();
    newTag.name = value.name;
    newTag.post = this.post;
    if (this.tags.includes(newTag)) {console.log('this tag Already exist'); } else {
      this.tagService.saveTag(newTag).subscribe(value1 => {
        this.tags.push(value1);
         this.sharedService.sharedListTags(this.tags);
         this.tags =  [];
        this.tags = this.tagService.getTags().subscribe(tags => {
          this.sharedService.sharedListTags(tags);
        });
        this.sharedService.tagsList.subscribe(tags => {
          this.tags = tags;
        });
      });

    }
  }
}
