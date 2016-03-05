/* beautify ignore:start */
import {it, inject, beforeEachProviders} from 'angular2/testing';
import {EntriesService} from './entries-service.service';
/* beautify ignore:end */

describe('Service: EntriesService', () => {

    beforeEachProviders(() => [EntriesService]);

    it('should be defined', inject([EntriesService], (service: EntriesService) => {
        expect(service).toBeDefined();
    }));

});