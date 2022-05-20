import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { DetailsModalComponent } from './components/pages/details-modal/details-modal.component';
import { ResultListComponent } from './components/pages/search-page/result-list/result-list.component';

import {CardModule} from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    DetailsModalComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
