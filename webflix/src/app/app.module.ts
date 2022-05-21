import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { DetailsModalComponent } from './components/pages/details-modal/details-modal.component';
import { ResultListComponent } from './components/pages/search-page/result-list/result-list.component';

import {CardModule} from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SearchPanelComponent } from './components/pages/search-page/search-panel/search-panel.component';
import { NoResultsComponent } from './components/pages/search-page/no-results/no-results.component';
import { HeaderComponent } from './components/common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    DetailsModalComponent,
    ResultListComponent,
    SearchPanelComponent,
    NoResultsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    PaginatorModule,
    DialogModule,
    TableModule,
    InputTextModule,
    MenubarModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
