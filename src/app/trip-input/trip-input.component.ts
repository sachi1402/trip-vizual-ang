import { Component, EventEmitter, Output } from '@angular/core';
import { Trip } from '../../trip.modal'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-input',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './trip-input.component.html'
})
export class TripInputComponent {
  start = '';
  end = '';

  @Output() tripAdded = new EventEmitter<{start: string, end: string}>();

  addTrip() {
    if (this.start && this.end) {
      this.tripAdded.emit({ start: this.start, end: this.end });
      this.start = '';
      this.end = '';
    }
  }
}
