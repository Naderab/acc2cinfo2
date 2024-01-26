import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
})
export class ResidenceComponent {
  @Input() residence!: Residence;
  @Output() show = new EventEmitter();
  @Output() delete = new EventEmitter();
  showApartment(r: Residence) {
    this.show.emit(r)
  }

  deleteResidence(r: Residence) {
    this.delete.emit(r)
  }
}
