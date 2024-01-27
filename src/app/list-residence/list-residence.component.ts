import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Apartment } from '../core/models/apartment';
import { ResidenceService } from '../core/services/residence.service';
import { ResidenceConsumerService } from '../core/services/residence-consumer.service';

@Component({
  selector: 'app-list-residence',
  templateUrl: './list-residence.component.html',
  styleUrls: ['./list-residence.component.css'],
})
export class ListResidenceComponent {
  residences: Residence[] = [];

  constructor(private rs: ResidenceService,private rs2:ResidenceConsumerService) {
    //this.residences = this.rs.residences;
    this.rs2.getAllResidences().subscribe({
      next: (data) => this.residences = data as Residence[],
      error:(err)=>console.log(err)
    })
   }
  listApartments: Apartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'AppartementS+1',
      residence: this.residences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'AppartementS+2',
      residence: this.residences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.residences[1],
    },
    {
      id: 4,
      appartNum: 4,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.residences[1],
    },
  ];
  listApartmentsFiltred: Apartment[] = [];

  showApartment(r: Residence) {
    this.listApartmentsFiltred = [];
    this.listApartmentsFiltred = this.listApartments.filter(
      (a) => a.residence == r
    );
  }

  deleteResidence(r: Residence) {
    this.residences = this.residences.filter((res) => res != r);
  }
}
