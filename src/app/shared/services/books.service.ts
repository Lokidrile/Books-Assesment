import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BOOKS_LIST } from '../mocks/books.mock';
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooksList(): Observable<Book[]> {
    return of(BOOKS_LIST).pipe(
      map((books: Book[]) => {
        return books.map(book => {
          book.genreString = book.genres.join(', ');
          return book;
        })
      })
    );
  }
}
