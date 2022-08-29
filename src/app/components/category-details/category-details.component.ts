import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service.service';
import { CategoriesService } from 'src/app/services/categories-service.service';
import { Category } from 'src/app/interfaces/categories';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent implements OnInit {
  postsData: Array<any> = [];
  categoryData: Array<Category> = [];
  postIndex: any;
  constructor(
    public posts: PostsService,
    public categoryDetails: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postIndex = this.route.snapshot.paramMap.get('id');
    this.categoryDetails
      .getCategories()
      .subscribe((res: any) =>
        this.categoryData.push(
          ...res.filter((item: any) => Number(item.id) === Number(this.postIndex))
        )
      );
    this.posts
      .getPosts()
      .subscribe((res: any) =>
        this.postsData.push(
          ...res
            .filter(
              (post: any) => Number(post.category_id) === Number(this.postIndex)
            )
            .sort((a: any, b:any)=>{ return b.date > a.date ? 1 : b.date < a.date ? -1 : 0})
        )
      );
  }
}
