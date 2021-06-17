import { AppModule } from './app.module';

describe('AppModule', () =>{
    let eventsModule: AppModule;

    beforeEach(() => {
        eventsModule = new AppModule();
    });

    it('should create an instance', () => {
        expect(eventsModule).toBeTruthy();
    });
});