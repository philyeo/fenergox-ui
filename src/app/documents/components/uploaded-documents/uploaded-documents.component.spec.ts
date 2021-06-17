import { async, TestBed } from '@angular/core/testing';
import { UploadedDocumentsComponent } from './uploaded-documents.component';
import { TestingModule } from './../../../../testing/testing-module';

describe('UploadedDocumentsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ 
        UploadedDocumentsComponent 
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UploadedDocumentsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
