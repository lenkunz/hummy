/* beautify ignore:start */
import {Component} from 'angular2/core';
/* beautify ignore:end */

@Component({
    selector: 'page',
    styles: [require('./page.component.scss').toString()],
    template: require('./page.component.html')
})
export class PageComponent {

}