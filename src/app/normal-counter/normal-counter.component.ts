import { ChangeDetectionStrategy, Component, effect } from '@angular/core';
import { ChildNormalComponent } from '../child-normal/child-normal.component';

@Component({
  selector: 'app-normal-counter',
    changeDetection: ChangeDetectionStrategy.OnPush,  // ← yeh add kar

  imports: [ChildNormalComponent],
  templateUrl: './normal-counter.component.html',
  styleUrl: './normal-counter.component.css'
})
export class NormalCounterComponent {
  counter = 0;
  name = 'Alice';

  constructor(){
    console.log("checking inside normal counter...", this.counter)
    effect(()=>{
console.log("checking inside normal effect...", this.counter)
    })
  }
  increment() {
    this.counter++;
    // Zone.js intercepts this → triggers change detection on the ENTIRE component tree
  }
  private renderCount = 0;

  ngDoCheck() {  // fires on EVERY change detection cycle
    this.renderCount++;
    // console.log(`normal counter render #${this.renderCount}`);
      console.log('%c[NormalCounter] checked', 'color: #e74c3c');

  }
  // ngOnInit(){
  //   console.log("checking normal counter")
  // }
}
