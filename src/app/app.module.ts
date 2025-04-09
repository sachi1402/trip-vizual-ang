import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripVisualizerComponent } from './trip-visualizer/trip-visualizer.component';
import { TripInputComponent } from './trip-input/trip-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TripVisualizerComponent,
    TripInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }