import { async, TestBed } from '@angular/core/testing';
import { DocumentsToUploadComponent } from './documents-to-upload.component';
import { TestingModule } from '../../../../testing/testing-module';

describe('DocumentsToUploadComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ 
        DocumentsToUploadComponent 
      ],
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DocumentsToUploadComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
