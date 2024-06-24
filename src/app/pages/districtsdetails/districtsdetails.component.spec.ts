import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsdetailsComponent } from './districtsdetails.component';

describe('DistrictsdetailsComponent', () => {
  let component: DistrictsdetailsComponent;
  let fixture: ComponentFixture<DistrictsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictsdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
