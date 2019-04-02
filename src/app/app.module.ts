import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PmAireComponent } from './pm-aire/pm-aire.component';

@NgModule({
  declarations: [
    AppComponent,
    PmAireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
