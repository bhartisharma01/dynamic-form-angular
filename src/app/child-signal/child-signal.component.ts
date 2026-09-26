import { ChangeDetectionStrategy, Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-child-signal',
   changeDetection: ChangeDetectionStrategy.OnPush,  
  imports: [],
  templateUrl: './child-signal.component.html',
  styleUrl: './child-signal.component.css'
})
export class ChildSignalComponent {
 counter = input.required<number>(); // new Signal-based @Input

  constructor() {
    // effect(() => {
    //   // console.log('signal child counter changed to:', this.counter());
    //   // this ONLY runs when counter signal changes, not when name changes in parent
    //     console.log('%c  [ChildSignal] checked', 'color: #2980b9');

    // });
  }
    ngDoCheck() {  // fires on EVERY change detection cycle

      console.log('%c[ChildSignalCounter] checked', 'color: #2980b9');

  }
  // ngOnInit(){
  //   console.log("checking child signal")
  // }
}
