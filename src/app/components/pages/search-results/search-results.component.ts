import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  searchedWord: any = history.state;
  binding: string = '';
  searchedPosts: Array<any> = [];
  constructor(public router: Router, public getPostData: PostsService) {}

  search() {
    this.router.navigateByUrl('/').then(() => {
      this.router.navigateByUrl('/results', {
        state: { data: this.binding },
      });
    });
  }

  getData() {
    return this.getPostData
      .getPosts()
      .subscribe((res) =>
        this.searchedPosts.push(
          ...res
            .filter(
              (word) =>
                word.title
                  ?.toLowerCase()
                  .includes(this.binding?.toLowerCase()) ||
                word.description
                  ?.toLowerCase()
                  .includes(this.binding?.toLowerCase())
            )
            .sort((a: any, b: any) => b.date - a.date)
        )
      );
  }

  ngOnInit(): void {
    this.binding = this.searchedWord.data;
    this.getData();
  }
}
