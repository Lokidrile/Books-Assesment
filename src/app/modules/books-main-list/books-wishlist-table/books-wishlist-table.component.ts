import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Book } from 'src/app/shared/models/books.model';
import { BooksHelperService } from 'src/app/shared/services/books-helper.service';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'books-wishlist-table',
  templateUrl: './books-wishlist-table.component.html',
  styleUrls: ['./books-wishlist-table.component.scss']
})
export class BooksWishlistTableComponent implements OnInit, OnDestroy {
  @Input()
  newBookToList!: Book;
  
  isSusbscribed = true;
  displayedColumns: string[] = ['cover','title', 'author', 'year', 'genres', 'price'];
  dataSource!: MatTableDataSource<Book>;

  constructor(
    private booksService: BooksService,
    private booksHelper: BooksHelperService
  ){}

  ngOnInit(): void {
    this.booksService.getBooksWishList().subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
      }
    );

    this.booksHelper.updatedBook$.subscribe((bookId) => {
      if (this.newBookToList.id === bookId && this.dataSource) {
        this.dataSource.data.push(this.newBookToList);
      }
    });
  }

  ngOnDestroy(): void {
    this.booksHelper.updatedBook$.unsubscribe();
  }
}
