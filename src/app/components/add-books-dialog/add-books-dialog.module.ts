import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBooksDialogComponent } from './add-books-dialog/add-books-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddBooksDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule,
    MatNativeDateModule
  ],
  exports: [AddBooksDialogComponent],
  bootstrap: [AddBooksDialogComponent]
})
export class AddBooksDialogModule { }
