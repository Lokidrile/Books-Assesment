import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    FilterBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilterBarComponent
  ]
})
export class FilterBarModule { }
