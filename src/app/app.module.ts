import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service'
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
