import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { AddBooksDialogComponent } from 'src/app/components/add-books-dialog/add-books-dialog/add-books-dialog.component';
import { Book } from 'src/app/shared/models/books.model';
import { BooksHelperService } from 'src/app/shared/services/books-helper.service';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'books-wishlist-table',
  templateUrl: './books-wishlist-table.component.html',
  styleUrls: ['./books-wishlist-table.component.scss']
})
export class BooksWishlistTableComponent implements OnInit, OnDestroy {

  @Output()
  public newMainlistBook = new EventEmitter<Book>();

  @Input()
  newBookToList!: Book;
  
  isSusbscribed = true;
  displayedColumns: string[] = ['cover','title', 'author', 'year', 'genres', 'price', "toMainList"];
  dataSource!: MatTableDataSource<Book>;

  constructor(
    private booksService: BooksService,
    private booksHelper: BooksHelperService,
    private dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.booksService.getBooksWishList().subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
      }
    );

    this.booksHelper.updatedBook$.subscribe((bookId) => {
      if (this.newBookToList.id === bookId &&
         this.dataSource &&
         this.booksHelper.isBookOnListAlready(this.dataSource.data, this.newBookToList)) {
        this.dataSource.data.push(this.newBookToList);
      }
    });
  }

  onRemoveBookToWishList(book: Book): void {
    const dialogRef = this.dialog.open(AddBooksDialogComponent, {
      data: book,
      width: '440px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.newMainlistBook.emit(result);
        const newList = this.booksHelper.setNewBooksList(this.dataSource.data, result);
        this.dataSource = new MatTableDataSource(newList);
      }
    });
  }

  ngOnDestroy(): void {
    this.booksHelper.updatedBook$.unsubscribe();
  }
}
