import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class DataCommunicationService {
    numberVal = new BehaviorSubject<number>(0);
    currentVal = this.numberVal.asObservable();

    constructor() { }

    changeValue(val: number) {
        this.numberVal.next(val);
    }
}


