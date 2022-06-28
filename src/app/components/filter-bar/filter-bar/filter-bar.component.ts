import { Component, ElementRef, EventEmitter, AfterViewInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements AfterViewInit {

  @Output()
  searchString = new EventEmitter<string>();

  @ViewChild('searchBar') searchBar!: ElementRef;

 

  constructor() { }

  ngAfterViewInit(): void {
    fromEvent(this.searchBar.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        map((value) => this.searchBar.nativeElement.value))
      .subscribe(result => {
        this.searchString.emit(result);
      });
  }
}
