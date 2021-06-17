import { async, TestBed } from '@angular/core/testing';
import { DocumentsComponent } from './documents.component';
import {TestingModule} from '../../testing/testing-module';
import { DocumentCollectionComponent } from './components/document-collection/document-collection.component';
import { DocumentsToUploadComponent } from './components/documents-to-upload/documents-to-upload.component';
import { UploadedDocumentsComponent } from './components/uploaded-documents/uploaded-documents.component';


describe('DocumentsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [
        DocumentsComponent,
        DocumentCollectionComponent,
        DocumentsToUploadComponent,
        UploadedDocumentsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DocumentsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});