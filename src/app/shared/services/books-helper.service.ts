import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksHelperService {

  updatedBook$: Subject<string> =  new Subject<string>();
  updatedMainBook$: Subject<string> =  new Subject<string>();

  constructor() { }

  updatedBook(bookId: string): void {
    this.updatedBook$.next(bookId);
  }

  updatedMainBook(bookId: string): void {
    this.updatedMainBook$.next(bookId);
  }

  setNewBooksList(booksList: Book[], bookToRemove: Book): Book[] { 
    return booksList.filter((book) => { book.id !== bookToRemove.id });
  }

  isBookOnListAlready(booksList: Book[], bookToSearch: Book): boolean {
    return booksList.filter((book) => { book.id !== bookToSearch.id }).length <= 0;
  }
}
