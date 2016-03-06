/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Entry} from '../../interfaces/entry/entry.interface';
import {Http, Response} from 'angular2/http';
/* beautify ignore:end */

let mocks : Entry[] = [];

mocks.push(<Entry>{
    id: "0",
    title: "The Businessman & The Fisherman",
    content: "An American businessman took a vacation to a small coastal Mexican village on doctor’s orders. Unable to sleep after an urgent phone call from the",
    author: "Hannah Wolfe",
    time: new Date(),
    headPic: "/img/testimg-cover.jpg",
    tags: [""]
});

mocks.push(<Entry>{
    id: "1",
    title: "I Have a Dream",
    content: "I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our",
    author: "Hannah Wolfe",
    time: new Date(),
    headPic: "",
    tags: [""]
});

@Injectable()
export class EntriesService {
    public getEntriesByRecent(offset: number, limit: number) : Entry[] {
        // this is how to communicate with server
        // Mocks
        return mocks;
    }
    public getEntryById(id: string) : Entry {
        return mocks[parseInt(id)];
    }
    public getEntriesByTag(offset: number, limit: number) : Entry[] {
        return [];
    }
    public create(entry: Entry) : Entry {
        return null;
    }
}
