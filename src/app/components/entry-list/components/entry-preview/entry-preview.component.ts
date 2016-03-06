/* beautify ignore:start */
import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Entry} from '../../../../interfaces/entry/entry.interface';
/* beautify ignore:end */

@Component({
    selector: 'entry-preview',
    styles: [require('./entry-preview.component.scss').toString()],
    template: require('./entry-preview.component.html'),
    directives: [...ROUTER_DIRECTIVES]
})

export class EntryPreviewComponent {
    @Input('entry') entry: Entry;
}