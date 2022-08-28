import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { PostPageComponent } from './components/pages/post-page/post-page.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent},
  { path: 'category/:id', pathMatch: 'full', component: CategoryComponent },
  { path: 'category/:id/post/:id', pathMatch: 'full', component: PostPageComponent },
  { path: 'results', component: SearchResultsComponent },
  { path: 'results/:id', component: PostPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
