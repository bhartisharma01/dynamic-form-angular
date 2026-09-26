import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsNormalComponent } from './signals-normal.component';

describe('SignalsNormalComponent', () => {
  let component: SignalsNormalComponent;
  let fixture: ComponentFixture<SignalsNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsNormalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
