import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import { MyMaterialModule } from '../shared/mymaterial.module';
import { DocumentsComponent } from './documents.component';
import { DocumentCollectionComponent } from './components/document-collection/document-collection.component';
import { DocumentsToUploadComponent } from './components/documents-to-upload/documents-to-upload.component';
import { UploadedDocumentsComponent } from './components/uploaded-documents/uploaded-documents.component';
import { DragDropDirective } from '../shared/drag-drop.directive';

@NgModule({
    imports: [
        CommonModule,
        DocumentsRoutingModule,
        MyMaterialModule
    ],
    declarations: [
        DocumentsComponent,
        DocumentCollectionComponent,
        DocumentsToUploadComponent,
        UploadedDocumentsComponent,
        DragDropDirective
    ]
})

export class DocumentsModule {

}