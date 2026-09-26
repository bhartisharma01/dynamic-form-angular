import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { ChildNormalComponent } from '../child-normal/child-normal.component';
import { ChildSignalComponent } from '../child-signal/child-signal.component';

@Component({
  selector: 'app-signal-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,  // ← yeh add kar
  imports: [ChildSignalComponent],
  templateUrl: './signal-counter.component.html',
  styleUrl: './signal-counter.component.css',

})
export class SignalCounterComponent {
  counter = signal(0);
  name = signal('Alice');

  // computed() recalculates only when counter() changes
  double = computed(() => this.counter() * 2);

  increment() {
    this.counter.update(v => v + 1);
    // Only components/bindings that READ counter() will re-render
  }

  private renderCount = 0;
    constructor(){
    console.log("checking inside signal counter...", this.counter())
    effect(()=>{
console.log("checking inside signal effect...", this.counter())
    })
  }

  ngDoCheck() {  // fires on EVERY change detection cycle
    this.renderCount++;
      console.log('%c[SignalCounter] checked', 'color: #27ae60');

  }
  // ngOnInit(){
  //   console.log("checking signal counter")
  // }
}
