import { Document, FamilyCategoryGenericName, DocumentCategory } from './../../documents.model';
import { DocumentsService } from './../../documents.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-documents-to-upload',
  templateUrl: './documents-to-upload.component.html',
  styleUrls: ['./documents-to-upload.component.css']
})
export class DocumentsToUploadComponent implements OnInit {

  @Input() caseId: number;
  @Input() documentReceived: EventEmitter<Document>;
  @Output() documentUploaded: EventEmitter<boolean> = new EventEmitter<boolean>();

  tableColumns: string[] = ['select', 'fileName', 'familyCategory', 'genericName', 'documentDate', 'fileSize', 'actions'];
  dataSource = new MatTableDataSource<Document>([]);
  selection = new SelectionModel<Document>(true, []);
  familyCategoryAndGenericNames: FamilyCategoryGenericName[];
  documentCategories: DocumentCategory[];

  constructor(private documentsServices: DocumentsService) { 
  }

  ngOnInit() {
    this.documentReceived.subscribe(document => {
      this.dataSource.data.push(document);
      this.dataSource.data = [...this.dataSource.data];
    });
    // this.documentsServices.getFamilyCategoryAndGenericNames().subscribe(
    //   data => this.familyCategoryAndGenericNames = data
    // );
    this.documentsServices.getLookupsResponse().pipe(tap(c => console.log(c))).subscribe(
      data => this.documentCategories = data
    );
  }

  retreiveGenericNames(familyCategory: string): string[] {
    return this.familyCategoryAndGenericNames
      .filter(fcgn => fcgn.familyCategory === familyCategory)[0].genericNames;
  }

  selectAll() {
    this.dataSource.data.forEach(document => document.checked = !document.checked);
  }

  deleteRowData(document: Document) {
    this.dataSource.data = this.dataSource.data.filter((value) => value.id !== document.id);
  }

  uploadFile(document: Document) {
    this.documentsServices.uploadDocument(this.caseId, document).pipe(
      tap(() => this.deleteRowData(document)),
      tap(() => this.documentUploaded.emit(true))
    ).subscribe();
  }

}
