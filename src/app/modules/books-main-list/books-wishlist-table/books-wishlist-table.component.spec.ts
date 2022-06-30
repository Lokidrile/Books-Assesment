import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { BOOKS_LIST } from 'src/app/shared/mocks/books.mock';
import { Book } from 'src/app/shared/models/books.model';
import { BooksHelperService } from 'src/app/shared/services/books-helper.service';
import { BooksService } from 'src/app/shared/services/books.service';
import { BooksWishlistTableComponent } from './books-wishlist-table.component';
import { of } from 'rxjs';

describe('BooksWishlistTableComponent', () => {
  let component: BooksWishlistTableComponent;
  let fixture: ComponentFixture<BooksWishlistTableComponent>;
  let bookService: BooksService;
  let booksHelper: BooksHelperService;
  let booksMock: Book[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksWishlistTableComponent ]
    })
    .compileComponents();
    bookService = TestBed.inject(BooksService);
    booksHelper = TestBed.inject(BooksHelperService);
    booksMock = BOOKS_LIST;
    fixture = TestBed.createComponent(BooksWishlistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#OnInit, should initialize datasource grid', () => {
    spyOn(bookService, 'getBooksWishList').and.returnValue(of(booksMock));

    component.ngOnInit();

    expect(component.dataSource.data).toEqual(booksMock);
  });
});
