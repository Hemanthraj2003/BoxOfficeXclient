import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerScreenComponent } from './viewer-screen.component';

describe('ViewerScreenComponent', () => {
  let component: ViewerScreenComponent;
  let fixture: ComponentFixture<ViewerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
