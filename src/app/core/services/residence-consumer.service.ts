import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root',
})
export class ResidenceConsumerService {
  apiUrl = 'http://localhost:3000/residences/';
  constructor(private http: HttpClient) {}

  getAllResidences() {
    return this.http.get(this.apiUrl);
  }

  addResidence(r: Residence) {
    return this.http.post(this.apiUrl, r);
  }

  updateResidence(r: Residence) {
    return this.http.put(this.apiUrl + r.id, r);
  }

  deleteResidence(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
