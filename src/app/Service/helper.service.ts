import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public lang = new BehaviorSubject("en");

  setLangueage(lang: string){

    this.lang.next(lang);

  }

  getLanguege(): Observable<string> {
    return this.lang.asObservable();
  }

  constructor() { }
}
