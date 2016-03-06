/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Api} from '../../services/api';
import {AppHeadComponent} from '../app-head/app-head.component';
/* beautify ignore:end */

@Component({
    selector: 'create-entry-name',
    styles: [require('./create-entry-name.component.scss').toString()],
    template: require('./create-entry-name.component.html'),
    directives: [AppHeadComponent]
})
export class CreateEntryNameComponent {
	constructor(private api: Api){

	}
	
	ngOnInit() {
		console.log('Create Story');
	}
}