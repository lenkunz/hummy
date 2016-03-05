import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Api} from '../../services/api';
import {EntriesService} from '../../services/entries-service/entries-service.service';
import {AppHeadComponent} from '../app-head/app-head.component';
import {Entry} from '../../interfaces/entry/entry.interface';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'home',
    directives: [...FORM_DIRECTIVES, AppHeadComponent],
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html')
})
export class Home implements OnInit {
    private pageId : number;
    private entries : Entry[];
    constructor(private api: Api, private entriesService: EntriesService, private params: RouteParams) {
        let pageId = params.get("page");
        if(pageId === undefined){
            this.pageId = 0;
        }else{
            this.pageId = +pageId;
        }
        // Do stuff
        this.entries = this.entriesService.getEntriesByRecent(
            this.api.entries.perPage * this.pageId, this.api.entries.perPage
        );
        
        console.log(this.entries);
    }

    ngOnInit() {
        //console.log('Hello Home');
    }
}
