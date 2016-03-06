import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Api} from '../../services/api';
import {EntriesService} from '../../services/entries-service/entries-service.service';
import {AppHeadComponent} from '../app-head/app-head.component';
import {Entry} from '../../interfaces/entry/entry.interface';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {EntryListComponent} from '../entry-list/entry-list.component';

@Component({
    selector: 'home',
    directives: [...FORM_DIRECTIVES, ...ROUTER_DIRECTIVES, AppHeadComponent, EntryListComponent],
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html')
})
export class Home implements OnInit {
    private pageId : number;
    private entries : Entry[];
    private previousPageNumber: number = 0;
    private nextPageNumber: number = 1;
    private showPrevious: boolean = false;
    private showNext: boolean = false;
    
    constructor(private api: Api, private entriesService: EntriesService, private params: RouteParams) {
        
    }
    
    changePage(page: number) {
        this.pageId = page >= 0 ? page : this.pageId;
        this.loadEntries();
    }
    
    loadEntries() {
        this.entries = this.entriesService.getEntriesByRecent(
            this.api.entries.perPage * this.pageId, this.api.entries.perPage
        );
        
        if(this.pageId == 0){
            this.showPrevious = false;
            this.showNext = true;
        }else{
            this.showPrevious = true;
            this.showNext = true;
        }
        
        console.log(this.showPrevious);
        this.previousPageNumber = this.pageId - 1;
        this.nextPageNumber = this.pageId + 1;
    }

    ngOnInit() {
        console.log("pageId");
        let pageId = this.params.get("page");
        console.log(pageId);
        console.log(this.entries);
        
        if(pageId === undefined){
            this.pageId = 0;
        }else{
            this.pageId = +pageId;
        }
        // Do stuff
        this.loadEntries();
        
        console.log(this.entries);
        //console.log('Hello Home');
    }
}
