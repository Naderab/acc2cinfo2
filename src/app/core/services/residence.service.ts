import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  residences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      state: true,
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      state: false,
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      state: true,
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'Manzah 5',
      image: '../../assets/images/R4.jpg',
      state: false,
    },
  ];
  constructor() {}

  a = 1;

  changeA() {
    this.a = 2;
  }

  addResidence(r: Residence) {
    this.residences.push(r)
  }
}
