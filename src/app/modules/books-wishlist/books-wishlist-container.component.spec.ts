import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWishlistContainerComponent } from './books-wishlist-container.component';

describe('BooksWishlistContainerComponent', () => {
  let component: BooksWishlistContainerComponent;
  let fixture: ComponentFixture<BooksWishlistContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksWishlistContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksWishlistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
