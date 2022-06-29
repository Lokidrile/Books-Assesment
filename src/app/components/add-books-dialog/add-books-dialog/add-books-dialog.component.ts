import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/shared/models/books.model';

@Component({
  selector: 'app-add-books-dialog',
  templateUrl: './add-books-dialog.component.html',
  styleUrls: ['./add-books-dialog.component.scss'],
  animations: []
})
export class AddBooksDialogComponent {

  constructor(
      @Inject(MAT_DIALOG_DATA)
      public data: Book,
      public dialogRef: MatDialogRef<AddBooksDialogComponent>
    ) { }

}
