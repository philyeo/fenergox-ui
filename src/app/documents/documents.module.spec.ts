import {DocumentsModule} from './documents.module';

describe('DocumentsModule', () => {
    let eventsModule: DocumentsModule;

    beforeEach(() => {
        eventsModule = new DocumentsModule();
    });

    it('should create an instance', () => {
        expect(eventsModule).toBeTruthy();
    })
})