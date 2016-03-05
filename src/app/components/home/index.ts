import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Api} from '../../services/api';
import {AppHeadComponent} from '../app-head/app-head.component';

@Component({
    selector: 'home',
    directives: [...FORM_DIRECTIVES, AppHeadComponent],
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html')
})
export class Home implements OnInit {
    constructor(private api: Api) {
        // Do stuff
    }

    ngOnInit() {
        //console.log('Hello Home');
    }

}
