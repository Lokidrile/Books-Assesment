import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { AddBooksDialogComponent } from 'src/app/components/add-books-dialog/add-books-dialog/add-books-dialog.component';
import { Book } from 'src/app/shared/models/books.model';
import { BooksHelperService } from 'src/app/shared/services/books-helper.service';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'books-main-list-table',
  templateUrl: './books-main-list-table.component.html',
  styleUrls: ['./books-main-list-table.component.scss'],
})
export class BooksMainListTableComponent implements OnInit {

  @Output()
  public newWishlistBook = new EventEmitter<Book>();
  
  @Input()
  newBookToList!: Book;

  displayedColumns: string[] = ['cover','title', 'author', 'year', 'genres', 'price', 'toWishList'];
  dataSource!: MatTableDataSource<Book>;

  constructor(
    private booksService: BooksService,
    private dialog: MatDialog,
    private booksHelper: BooksHelperService
  ){}

  ngOnInit(): void {
    this.booksService.getBooksList().subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
      }
    );

    this.booksHelper.updatedMainBook$.subscribe((bookId) => {
      if (this.newBookToList.id === bookId &&
          this.dataSource &&
          this.booksHelper.isBookOnListAlready(this.dataSource.data, this.newBookToList)) {
        this.dataSource.data.push(this.newBookToList);
      }
    });
  }

  onApplyFilter(value: string): void {
    this.dataSource.filter = value;
  }

  onAddBookToWishList(book: Book): void {
    const dialogRef = this.dialog.open(AddBooksDialogComponent, {
      data: book,
      width: '440px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.newWishlistBook.emit(result);
        const newList = this.booksHelper.setNewBooksList(this.dataSource.data, result);
        this.dataSource = new MatTableDataSource(newList);
      }
    });
  }
}

