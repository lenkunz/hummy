import {Injectable} from 'angular2/core';

@Injectable()
export class Api {
  title: string = 'Hummy';
  description: string = 'Thoughts, stories and ideas.';
  headerHeight: string = "1em";
  entries = {
      perPage: 10
  };
}
