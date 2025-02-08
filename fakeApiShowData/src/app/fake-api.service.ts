import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Data {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor() { }

  // Genera 50 entradas de datos simulados
  getData(): Observable<Data[]> {
    const fakeData: Data[] = [];
    for (let i = 1; i <= 50; i++) {
      fakeData.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`
      });
    }
    return of(fakeData);
  }
}
