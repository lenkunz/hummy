/* beautify ignore:start */
import {Component, Input} from 'angular2/core';
import {Api} from '../../services/api';
/* beautify ignore:end */

@Component({
    selector: 'app-head',
    styles: [require('./app-head.component.scss').toString()],
    template: require('./app-head.component.html'),
})
export class AppHeadComponent {
    @Input('desc') description;
    @Input('title') name: string;
    
    constructor(private api: Api){
        
    }
}
