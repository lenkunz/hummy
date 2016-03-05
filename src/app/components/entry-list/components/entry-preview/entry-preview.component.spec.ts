/* beautify ignore:start */
import {it, injectAsync, beforeEachProviders, TestComponentBuilder} from 'angular2/testing';
import {EntryPreviewComponent} from './entry-preview.component';
/* beautify ignore:end */

describe('Component: EntryPreviewComponent', () => {

            beforeEachProviders(() => []);

            it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
                            return tcb.createAsync(EntryPreviewComponent)
                                .then((fixture) => {
                                        let element = fixture.debugElement.nativeElement;
                                        let cmpInstance = <EntryPreviewComponent>fixture.debugElement.componentInstance;
                fixture.detectChanges();

                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});