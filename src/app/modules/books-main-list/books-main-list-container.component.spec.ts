import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksMainListContainerComponent } from './books-main-list-container.component';

describe('BooksMainListContainerComponent', () => {
  let component: BooksMainListContainerComponent;
  let fixture: ComponentFixture<BooksMainListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksMainListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksMainListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
