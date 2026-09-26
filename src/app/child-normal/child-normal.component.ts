import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-normal',
   changeDetection: ChangeDetectionStrategy.OnPush,  
  imports: [],
  templateUrl: './child-normal.component.html',
  styleUrl: './child-normal.component.css'
})
export class ChildNormalComponent {
  @Input() counter!: number;

  // ngOnChanges() {
  //   // console.log('normal child render', this.counter); // fires even when name changes in parent!
  //     console.log('%c  [ChildNormal] checked', 'color: #e67e22');

  // }
  // ngOnInit(){
  //   console.log("checking child normal")
  // }
     ngDoCheck() {  // fires on EVERY change detection cycle

      console.log('%c[ChildNormalCounter] checked', 'color: #e67e22');

  }
}
