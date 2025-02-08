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
    for (let i = 1; i <= 50; i++) {  // Generamos 50 registros
      fakeData.push({
        id: i,
        name: chance.name(),  // Genera un nombre realista
        email: chance.email(),  // Genera un correo electrónico realista
        //address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`,  // Dirección más completa
        //phone: faker.phone.phoneNumber(),  // Número de teléfono realista
      });
    }
    return of(fakeData);
  }
}
