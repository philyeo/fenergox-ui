import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Document } from './../../documents.model';
import { DocumentsService } from './../../documents.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-uploaded-documents',
  templateUrl: './uploaded-documents.component.html',
  styleUrls: ['./uploaded-documents.component.css']
})

export class UploadedDocumentsComponent implements OnInit {

  @Input() caseId: number;
  @Input() refreshReceived: EventEmitter<boolean>;
  
  tableColumns: string[] = ['fileName', 'familyCategory', 'genericName', 'documentDate', 'fileSize'];
  dataSource = new MatTableDataSource<Document>();
  loading = true;
  
  constructor(private documentsService: DocumentsService) {
  }

  ngOnInit() {
    this.refreshReceived.subscribe(() => this.getDocuments());
    this.getDocuments();
  }

  getDocuments() {
    this.loading = true;
    this.documentsService.getDocuments(this.caseId).pipe(
      tap(() => this.loading = false)
    ).subscribe(
      documents => this.dataSource.data = documents
    );
  }

}
