import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  mySubject = new Subject<string>();
  myObservable = this.mySubject.asObservable();

  sendData(data:string){
    this.mySubject.next(data)
  }
}
