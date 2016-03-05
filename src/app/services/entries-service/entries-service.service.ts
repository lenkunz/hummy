/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Entry} from '../../interfaces/entry/entry.interface';
import {Http, Response} from 'angular2/http';
/* beautify ignore:end */

let mocks : Entry[] = [];
mocks.push(<Entry>{
    id: "0",
    title: "Test",
    content: "test",
    author: "Author",
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
        return null;
    }
    public getEntriesByTag(offset: number, limit: number) : Entry[] {
        return [];
    }
    public create(entry: Entry) : Entry {
        return null;
    }
}
