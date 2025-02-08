import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';


import { AppComponent } from './app.component';
import { FakeApiService } from './fake-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,

  ],
  providers: [FakeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
