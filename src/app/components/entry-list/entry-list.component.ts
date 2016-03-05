/* beautify ignore:start */
import {Component, Input} from 'angular2/core';
import {Entry} from '../../interfaces/entry/entry.interface';
import {EntryPreviewComponent} from './components/entry-preview/entry-preview.component';
/* beautify ignore:end */

@Component({
    selector: 'entry-list',
    styles: [require('./entry-list.component.scss').toString()],
    template: require('./entry-list.component.html')
})
export class EntryListComponent {
    @Input('entries') entries : Entry[];
}