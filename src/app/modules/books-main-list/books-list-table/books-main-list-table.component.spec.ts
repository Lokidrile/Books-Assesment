import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { BOOKS_LIST } from 'src/app/shared/mocks/books.mock';
import { Book } from 'src/app/shared/models/books.model';
import { BooksHelperService } from 'src/app/shared/services/books-helper.service';
import { BooksService } from 'src/app/shared/services/books.service';

import { BooksMainListTableComponent } from './books-main-list-table.component';

describe('BooksMainListTableComponent', () => {
  let component: BooksMainListTableComponent;
  let fixture: ComponentFixture<BooksMainListTableComponent>;
  let bookService: BooksService;
  let booksHelper: BooksHelperService;
  let booksMock: Book[];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksMainListTableComponent ]
    })
    .compileComponents();

    bookService = TestBed.inject(BooksService);
    booksHelper = TestBed.inject(BooksHelperService);
    booksMock = BOOKS_LIST;
    fixture = TestBed.createComponent(BooksMainListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onApplyFilter, should filter mat table datasource', () => {
    component.dataSource = new MatTableDataSource(booksMock);

    component.onApplyFilter('It');

    expect(component.dataSource.filter).toEqual('It');

  });
});
