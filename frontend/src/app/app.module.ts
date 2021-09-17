import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkPositionsComponent } from './work-positions/work-positions.component';
import { WorkPositionItemComponent } from './work-positions/work-position-item/work-position-item.component';
import { WorkPositionsService } from './work-positions/work-positions.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkPositionsComponent,
    WorkPositionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatExpansionModule
  ],
  providers: [WorkPositionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
