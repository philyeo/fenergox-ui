import { Component, EventEmitter, Output } from '@angular/core';
import {Document, DocumentUtil} from '../../documents.model';

@Component({
  selector: 'app-document-collection',
  templateUrl: './document-collection.component.html',
  styleUrls: ['./document-collection.component.css']
})

export class DocumentCollectionComponent  {

  @Output() uploadDocument: EventEmitter<Document> = new EventEmitter<Document>();

  uploadFile(event) {
    for (const element of event) {
      this.uploadDocument.next(this.buildDocument(element));
    }
  }

  buildDocument(element): Document {
    return DocumentUtil.create({
      id: element.name + '_' + new Date().getTime(),
      fileName: element.name,
      fileSize: element.size,
      documentDate: new Date()
    });
  }

}
