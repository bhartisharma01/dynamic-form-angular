import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCounterComponent } from './normal-counter.component';

describe('NormalCounterComponent', () => {
  let component: NormalCounterComponent;
  let fixture: ComponentFixture<NormalCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
