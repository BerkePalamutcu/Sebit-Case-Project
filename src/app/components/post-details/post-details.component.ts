import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  postDetails: Array<any> = [];
  selectedPostIndex: any;
  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.selectedPostIndex = this.route.snapshot.paramMap.get('id');
    this.postsService
      .getPosts()
      .subscribe((res) =>
        this.postDetails.push(
          ...res.filter(
            (post) => Number(post.id) === Number(this.selectedPostIndex)
          )
        )
      );
  }
}
