import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBooksDialogComponent } from './add-books-dialog/add-books-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AddBooksDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatGridListModule,
    MatNativeDateModule
  ],
  exports: [AddBooksDialogComponent],
  bootstrap: [AddBooksDialogComponent]
})
export class AddBooksDialogModule { }
