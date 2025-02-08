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

  // Simula una llamada HTTP GET
  getData(): Observable<Data[]> {
    const fakeData: Data[] = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      { id: 3, name: 'Alice Brown', email: 'alice.brown@example.com' },
      { id: 4, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
      { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com' }
    ];
    return of(fakeData); // Retorna un Observable con los datos simulados
  }
}
