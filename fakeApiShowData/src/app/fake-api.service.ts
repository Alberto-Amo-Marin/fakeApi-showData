import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const Chance = require('chance');
const chance = new Chance();

export interface Data {
  id: number;
  name: string;
  email: string;
  address?: string;
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor() { }

  getData(): Observable<Data[]> {
    const fakeData: Data[] = [];
    for (let i = 1; i <= 50; i++) {  
      fakeData.push({
        id: i,
        name: chance.name(),  
        email: chance.email(),  
        address: chance.address(),  
        phone: chance.phone(),  
      });
    }
    return of(fakeData);
  }
}
