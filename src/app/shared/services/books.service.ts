import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BOOKS_LIST } from '../mocks/books.mock';
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooksList(): Observable<Book[]> {
    return of(BOOKS_LIST).pipe(
      map((books: Book[]) => {
        return books.map(book => {
          book.genreString = book.genres.join(', ');
          return book;
        }).filter((book) => {
          return !book.inWishList && book.available;
        })
      })
    );
  }

  getBooksWishList(): Observable<Book[]> {
    return of(BOOKS_LIST).pipe(
      map((books: Book[]) => {
        return books.map(book => {
          book.genreString = book.genres.join(', ');
          return book;
        }).filter((book) => {
          return book.inWishList && !book.available;
        })
      })
    );
  }
}
