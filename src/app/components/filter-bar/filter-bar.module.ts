import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    FilterBarComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    FilterBarComponent
  ]
})
export class FilterBarModule { }
