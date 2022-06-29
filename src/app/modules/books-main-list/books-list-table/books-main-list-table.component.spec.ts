import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksMainListTableComponent } from './books-main-list-table.component';

describe('BooksMainListTableComponent', () => {
  let component: BooksMainListTableComponent;
  let fixture: ComponentFixture<BooksMainListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksMainListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksMainListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
