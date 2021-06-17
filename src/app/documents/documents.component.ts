import { Component, EventEmitter } from '@angular/core';
import { Document } from './documents.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})


export class DocumentsComponent {

  title = 'fenergox-ui';
  refreshDocumentListEmitter: EventEmitter<boolean> = new EventEmitter(true);
  documentToUploadEmitter: EventEmitter<Document> = new EventEmitter(true);
  caseId = 1; // TODO retrieve through URL 

  refreshDocumentList() {
    this.refreshDocumentListEmitter.emit(true);
  }

  uploadDocument(document: Document) {
    this.documentToUploadEmitter.emit(document);
  }
  
}
