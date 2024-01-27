import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Residence } from '../core/models/residence';
import { ResidenceConsumerService } from '../core/services/residence-consumer.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
})
export class ResidenceComponent {
  constructor(private rs:ResidenceConsumerService){}
  @Input() residence!: Residence;
  @Output() show = new EventEmitter();
  @Output() delete = new EventEmitter();
  showApartment(r: Residence) {
    this.show.emit(r)
  }

  deleteResidence(r: Residence) {
    this.delete.emit(r)
  }

  changerStatus() {
    this.residence.state = true;
    this.rs.updateResidence(this.residence.id,this.residence).subscribe()

  }
}
