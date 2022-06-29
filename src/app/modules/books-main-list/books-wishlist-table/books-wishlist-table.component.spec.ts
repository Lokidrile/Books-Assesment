import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWishlistTableComponent } from './books-wishlist-table.component';

describe('BooksWishlistTableComponent', () => {
  let component: BooksWishlistTableComponent;
  let fixture: ComponentFixture<BooksWishlistTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksWishlistTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksWishlistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
