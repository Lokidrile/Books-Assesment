import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/books.model';
import { BooksHelperService } from 'src/app/shared/services/books-helper.service';

@Component({
  selector: 'books-main-list-container',
  templateUrl: './books-main-list-container.component.html',
  styleUrls: ['./books-main-list-container.component.scss'],
})
export class BooksListContainerComponent implements OnInit {
  bookToWishList!: Book;
  observable1 = new Observable();
  observable2 = new Observable();
  constructor(private booksHelper: BooksHelperService) { }

  ngOnInit(): void {
  }

  onBookHasAddedToWishList(newBook: Book): void {
    this.bookToWishList = newBook;
    this.booksHelper.updatedBook(newBook.id);
  }
}
