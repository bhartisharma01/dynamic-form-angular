import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-normal',
  imports: [],
  templateUrl: './signals-normal.component.html',
  styleUrl: './signals-normal.component.css'
})
export class SignalsNormalComponent {
 // Traditional State
  firstName = 'Bharti';
  lastName = 'Sharma';

  // Unrelated State
  counter = 0;

  // Signal State
  signalFirstName = signal('Bharti');
  signalLastName = signal('Sharma');

  signalCounter = signal(0);

  // Traditional Getter
  get fullName() {
    console.log('%c fullname getter method','color: red; font-weight: bold');
    return `${this.firstName} ${this.lastName}`;
  }

  // Signal Computed
  signalFullName = computed(() => {
    console.log('%c computed signalFullname', 'color: green; font-weight: bold');
    return `${this.signalFirstName()} ${this.signalLastName()}`;
  });

  incrementCounter() {
    this.counter++;
    this.signalCounter.update(v => v + 1);
  }

  updateFirstName() {
    this.firstName = 'Prachi';
    this.signalFirstName.set('Prachi');
  }
}
