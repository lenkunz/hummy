/* beautify ignore:start */
import {Component, OnInit} from 'angular2/core';
import {AppHeadComponent} from '../app-head/app-head.component';
import {FORM_DIRECTIVES} from 'angular2/common';
/* beautify ignore:end */

@Component({
    selector: 'error',
    styles: [require('./error.component.scss').toString()],
    template: require('./error.component.html'),
    directives: [...FORM_DIRECTIVES,AppHeadComponent]
})
export class ErrorComponent implements OnInit {
    private error_code : string = "404";
    private error_desc : string = "Page not found."
    
    ngOnInit(){
        
    }
}