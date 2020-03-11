import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Post} from '../../../model/post.model';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnChanges {


  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  allPosts: Post[];
  autoCompleteList: any[];

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();
  @Input('posts') posts = [];
  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit() {
    // this.postService.getPosts().subscribe(posts => {
    //
    //
    // });
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.posts.currentValue !== changes.posts.previousValue) {
      this.allPosts = this.posts;
      console.log(this.posts);
    }
  }
  filterCategoryList(val) {
    const categoryList = [];
    if (typeof val !== 'string') {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allPosts.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allPosts;
  }

  displayFn(post: Post) {
    const k = post ? post.title : post;
    return k;
  }

  filterPostList(event) {
    const posts = event.source.value;
    if (!posts) {
      this.postService.searchOption = [];
    } else {
      console.log('not');

      this.postService.searchOption.push(posts);
      this.onSelectedOption.emit(this.postService.searchOption);
    }

    this.focusOnPlaceInput();


  }

  removeOption(option) {

    const index = this.postService.searchOption.indexOf(option);
    if (index >= 0) {
      this.postService.searchOption.splice(index, 1);
    }
    this.focusOnPlaceInput();

    this.onSelectedOption.emit(this.postService.searchOption);
  }

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }

  private autoCompleteExpenseList(input) {
    const categoryList = this.filterCategoryList(input);
    this.autoCompleteList = categoryList;
  }


}
