import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodUserComponent } from './god-user.component';

describe('GodUserComponent', () => {
  let component: GodUserComponent;
  let fixture: ComponentFixture<GodUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
