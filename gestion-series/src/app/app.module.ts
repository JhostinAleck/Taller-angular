import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListarSeriesComponent } from './series/listar-series/listar-series.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,ListarSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
