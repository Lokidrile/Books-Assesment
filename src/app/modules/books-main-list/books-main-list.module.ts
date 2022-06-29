import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BooksMainListTableComponent } from './books-list-table/books-main-list-table.component';
import { BooksListContainerComponent } from './books-main-list-container.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FilterBarModule } from 'src/app/components/filter-bar/filter-bar.module';
import {MatDividerModule} from '@angular/material/divider';
import { BooksWishlistTableComponent } from './books-wishlist-table/books-wishlist-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BooksMainListTableComponent,
    BooksListContainerComponent,
    BooksWishlistTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    FilterBarModule,
    MatDividerModule,
    MatDialogModule,
    NoopAnimationsModule
  ],
  exports: [
    BooksListContainerComponent
  ]
})
export class BooksMainListModule { }
