/* beautify ignore:start */
import {Component, Input, Output} from 'angular2/core';
import {Api} from '../../services/api';
import {ContenteditableModel} from '../../content-editable.model';
/* beautify ignore:end */

@Component({
    selector: 'app-head',
    styles: [require('./app-head.component.scss').toString()],
    template: require('./app-head.component.html'),
    directives: [ContenteditableModel]
})
export class AppHeadComponent {
    @Input('desc') description;
    @Input('title') name: string;
    resultTitle: string;
    
    constructor(private api: Api){
        
    }
}
