import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Array<any> = [];
  searchValue: any;
  constructor(public getItems: CategoriesService) { }
  getResults(value: any){
    this.searchValue = value;
    console.log(this.searchValue);
  }
  ngOnInit(): void {
    this.getItems.getCategories().subscribe((res) => this.categories.push(...res))
  }

}
