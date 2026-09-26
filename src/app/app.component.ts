import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './forms/form/form.component';
import { NormalCounterComponent } from './normal-counter/normal-counter.component';
import { SignalCounterComponent } from './signal-counter/signal-counter.component';
import { SignalsNormalComponent } from "./signals-normal/signals-normal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormComponent, NormalCounterComponent, SignalCounterComponent, SignalsNormalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scrrum-labs-code';
  ngDoCheck() {
  console.group('--- Change Detection Cycle ---');
  console.log('App checked');
}

ngAfterViewChecked() {
  console.groupEnd();
}
}
