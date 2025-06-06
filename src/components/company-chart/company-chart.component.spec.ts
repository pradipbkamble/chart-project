import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyChartComponent } from './company-chart.component';

describe('CompanyChartComponent', () => {
  let component: CompanyChartComponent;
  let fixture: ComponentFixture<CompanyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
