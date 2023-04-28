import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosDashbordComponent } from './pos-dashbord.component';

describe('PosDashbordComponent', () => {
  let component: PosDashbordComponent;
  let fixture: ComponentFixture<PosDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
