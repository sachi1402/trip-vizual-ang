import { Component } from '@angular/core';
import { Trip } from '../../trip.modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-visualizer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './trip-visualizer.component.html',
  styleUrl: './trip-visualizer.component.css'
})
export class TripVisualizerComponent {
  trips: Trip[] = [];

  addTrip(trip: { start: string, end: string }) {
    const { start, end } = trip;

    let level = 1;
    let type: Trip['type'] = 'non-continued';

    const prev = this.trips[this.trips.length - 1];

    if (prev) {
      if (prev.end.toLowerCase() === start.toLowerCase()) {
        type = 'continued';
      } else {
        type = 'non-continued';
      }

      if (prev.start.toLowerCase() === start.toLowerCase() &&
          prev.end.toLowerCase() === end.toLowerCase()) {
        level = 2;
        type = 'duplicate';
      }
    }

    this.trips.push({
      start,
      end,
      level,
      type
    });
  }

  getShortName(name: string): string {
    return name.substring(0, 3).toUpperCase();
  }
}
