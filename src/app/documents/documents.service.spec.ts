import {TestBed} from '@angular/core/testing';
import { DocumentsService } from './documents.service';

describe('DocumentsService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [DocumentsService]
    }));

    it('should be created', () => {
        const service: DocumentsService = TestBed.get(DocumentsService);
        expect(service).toBeTruthy();
    });
});

export class FakeDocumentsService extends DocumentsService{
    
}