import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRequirementsComponent } from './local-requirements.component';

describe('LocalRequirementsComponent', () => {
  let component: LocalRequirementsComponent;
  let fixture: ComponentFixture<LocalRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
