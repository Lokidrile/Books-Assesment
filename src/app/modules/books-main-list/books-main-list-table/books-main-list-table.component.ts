import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Book } from 'src/app/shared/models/books.model';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-books-main-list-table',
  templateUrl: './books-main-list-table.component.html',
  styleUrls: ['./books-main-list-table.component.scss'],
})
export class BooksMainListTableComponent implements OnInit {

  
  displayedColumns: string[] = ['cover','title', 'author', 'year', 'genres', 'price'];
  dataSource!: MatTableDataSource<Book>;

  constructor(
    private booksService: BooksService
  ){}

  ngOnInit(): void {
    this.booksService.getBooksList().subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
      }
    )
  }

  onApplyFilter(value: string): void {
    this.dataSource.filter = value;
  }
}

