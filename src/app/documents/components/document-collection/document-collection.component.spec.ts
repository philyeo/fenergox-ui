import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentCollectionComponent } from './document-collection.component';

describe('DocumentCollectionComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DocumentCollectionComponent 
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DocumentCollectionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
