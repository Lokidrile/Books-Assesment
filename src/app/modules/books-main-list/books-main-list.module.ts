import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BooksMainListTableComponent } from './books-main-list-table/books-main-list-table.component';
import { BooksMainListContainerComponent } from './books-main-list-container.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FilterBarModule } from 'src/app/components/filter-bar/filter-bar.module';



@NgModule({
  declarations: [
    BooksMainListTableComponent,
    BooksMainListContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    FilterBarModule
  ],
  exports: [
    BooksMainListTableComponent
  ]
})
export class BooksMainListModule { }
