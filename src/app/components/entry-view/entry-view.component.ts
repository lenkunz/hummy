/* beautify ignore:start */
import {Component, OnInit} from 'angular2/core';
import {Entry} from '../../interfaces/entry/entry.interface';
import {AppHeadComponent} from '../app-head/app-head.component';
import {EntriesService} from '../../services/entries-service/entries-service.service';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
/* beautify ignore:end */

@Component({
    selector: 'entry-view',
    styles: [require('./entry-view.component.scss').toString()],
    template: require('./entry-view.component.html'),
    directives: [AppHeadComponent]
})
export class EntryViewComponent implements OnInit {

    private entry: Entry;

    ngOnInit(){
        this.entry = this.entriesService.getEntryById(this.params.get('id'));
    }

    constructor(private params: RouteParams, private entriesService: EntriesService) {

    }

    getSize(entry: Entry): string {
        if (typeof entry != "undefined" && typeof entry.headPic != "undefined" && entry.headPic.length != 0) {
            return "large";
        } else {
            return "medium";
        }
    }

    getBackground(entry: Entry): string {
        if(entry)
            return entry.headPic;
        else
            return "none";
    }
}
