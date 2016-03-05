/* beautify ignore:start */
import {Component, Input, OnInit} from 'angular2/core';
import {Entry} from '../../interfaces/entry/entry.interface';
import {EntryPreviewComponent} from './components/entry-preview/entry-preview.component';
/* beautify ignore:end */

@Component({
    selector: 'entry-list',
    styles: [require('./entry-list.component.scss').toString()],
    directives: [EntryPreviewComponent],
    template: require('./entry-list.component.html')
})
export class EntryListComponent implements OnInit {
    @Input('entries') entries : Entry[];
    
    constructor(){
    }
    
    ngOnInit(){
        console.log("Entries preview %o", this.entries);        
    }
}