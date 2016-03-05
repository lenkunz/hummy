import {Component, OnInit} from 'angular2/core';
import {Api} from '../../services/api/index';
import {AppHeadComponent} from '../app-head/app-head.component';

@Component({
  selector: 'about',
  template: require('./template.html'),
  styles: [require('./style.scss')],
  providers: [],
  directives: [AppHeadComponent],
  pipes: []
})
export class About implements OnInit {
  private api: Api;
  public name: string = "About";

  constructor(api: Api) {
    this.api = api;
    // Do stuff
  }
    
  ngOnInit() {
    console.log('Hello About');
  }

}
