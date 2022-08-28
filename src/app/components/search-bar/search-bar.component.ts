import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchValue = new FormControl('');
  constructor(private router: Router) {}

  redirect() {
    this.router.navigateByUrl('/results', {
      state: { data: this.searchValue.value },
    });
  }

  ngOnInit(): void {}
}
