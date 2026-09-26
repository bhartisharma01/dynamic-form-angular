import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNormalComponent } from './child-normal.component';

describe('ChildNormalComponent', () => {
  let component: ChildNormalComponent;
  let fixture: ComponentFixture<ChildNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildNormalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
