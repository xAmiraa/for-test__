import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './task1/nav/nav.component';
import { Nav2Component } from './task1/nav2/nav2.component';
import { ForTestComponent } from './task1/for-test/for-test.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Nav2Component,
    ForTestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
