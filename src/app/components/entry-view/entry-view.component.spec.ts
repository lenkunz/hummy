/* beautify ignore:start */
import {it, injectAsync, beforeEachProviders, TestComponentBuilder} from 'angular2/testing';
import {EntryViewComponent} from './entry-view.component';
/* beautify ignore:end */

describe('Component: EntryViewComponent', () => {

            beforeEachProviders(() => []);

            it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
                            return tcb.createAsync(EntryViewComponent)
                                .then((fixture) => {
                                        let element = fixture.debugElement.nativeElement;
                                        let cmpInstance = <EntryViewComponent>fixture.debugElement.componentInstance;
                fixture.detectChanges();

                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});