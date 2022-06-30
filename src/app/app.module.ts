import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksMainListModule } from './modules/books-main-list/books-main-list.module';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksMainListModule,
    MatToolbarModule
  ],
  providers: [BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
