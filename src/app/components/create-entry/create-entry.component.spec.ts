/* beautify ignore:start */
import {it, injectAsync, beforeEachProviders, TestComponentBuilder} from 'angular2/testing';
import {CreateEntryComponent} from './create-entry.component';
/* beautify ignore:end */

describe('Component: CreateEntryComponent', () => {

            beforeEachProviders(() => []);

            it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
                            return tcb.createAsync(CreateEntryComponent)
                                .then((fixture) => {
                                        let element = fixture.debugElement.nativeElement;
                                        let cmpInstance = <CreateEntryComponent>fixture.debugElement.componentInstance;
                fixture.detectChanges();

                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});