import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AmigoDetailComponent } from './amigo-detail/amigo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AmigoDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
