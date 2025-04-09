import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripVisualizerComponent } from './trip-visualizer/trip-visualizer.component';
import { TripInputComponent } from './trip-input/trip-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
   <app-trip-visualizer></app-trip-visualizer>

  `,
  styles : []
})
export class AppComponent {
  title = 'trip-visualizer';
}
