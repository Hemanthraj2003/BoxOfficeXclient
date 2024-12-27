import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetshowsComponent } from './getshows.component';

describe('GetshowsComponent', () => {
  let component: GetshowsComponent;
  let fixture: ComponentFixture<GetshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetshowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
