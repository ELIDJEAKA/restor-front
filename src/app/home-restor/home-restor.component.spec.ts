import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRestorComponent } from './home-restor.component';

describe('HomeRestorComponent', () => {
  let component: HomeRestorComponent;
  let fixture: ComponentFixture<HomeRestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
