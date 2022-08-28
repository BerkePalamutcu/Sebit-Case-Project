import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { PostPageComponent } from './components/pages/post-page/post-page.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
import { StringElipsisPipe } from './pipes/string-elipsis.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    CategoryCardComponent,
    HomepageComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    PostPageComponent,
    PostDetailsComponent,
    SearchResultsComponent,
    StringElipsisPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
