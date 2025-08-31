import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind-example',
  imports: [],
  templateUrl: './event-bind-example.html',
  styleUrl: './event-bind-example.css'
})
export class EventBindExample {
  times: number = 0;
  userInput: string = '';

  incrementTimes() {
    this.times++;
  };

  decrementTimes() {
    this.times--;
  };

  reset() {
    this.times = 0;
  };

  onUserInput(event: Event) {
    this.userInput = (<HTMLInputElement>event.target).value;
  };
};