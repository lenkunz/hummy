/* beautify ignore:start */
import {Component, Input, Output, OnInit} from 'angular2/core';
import {Api} from '../../services/api';
import {ContenteditableModel} from '../../content-editable.model';
/* beautify ignore:end */

@Component({
    selector: 'app-head',
    styles: [require('./app-head.component.scss').toString()],
    template: require('./app-head.component.html'),
    directives: [ContenteditableModel]
})
export class AppHeadComponent implements OnInit {
    @Input('desc') description;
    @Input('title') name: string;
    @Input('background') bg: string = "none";
    @Input('size') size: string = "medium";
    
    resultTitle: string;
    
    constructor(private api: Api){
    }
    
    ngOnInit(){
    }
    
    isLarge(size: string) : boolean {
        return size.toLocaleLowerCase() == "large";
    }
    
    makeUrl(url: string){
        if(url === undefined){
            return "none";
        }
        
        return "url(" + url + ")";
    }
}
