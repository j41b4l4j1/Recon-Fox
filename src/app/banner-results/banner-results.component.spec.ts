import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerResultsComponent } from './banner-results.component';

describe('BannerResultsComponent', () => {
  let component: BannerResultsComponent;
  let fixture: ComponentFixture<BannerResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
