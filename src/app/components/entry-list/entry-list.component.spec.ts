/* beautify ignore:start */
import {it, injectAsync, beforeEachProviders, TestComponentBuilder} from 'angular2/testing';
import {EntryListComponent} from './entry-list.component';
/* beautify ignore:end */

describe('Component: EntryListComponent', () => {

            beforeEachProviders(() => []);

            it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
                            return tcb.createAsync(EntryListComponent)
                                .then((fixture) => {
                                        let element = fixture.debugElement.nativeElement;
                                        let cmpInstance = <EntryListComponent>fixture.debugElement.componentInstance;
                fixture.detectChanges();

                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});