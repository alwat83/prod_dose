import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosageCorrectionComponent } from './dosage-correction.component';

describe('DosageCorrectionComponent', () => {
  let component: DosageCorrectionComponent;
  let fixture: ComponentFixture<DosageCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosageCorrectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosageCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
