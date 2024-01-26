import { Component } from '@angular/core';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent {
  variable!:number;
  constructor(private r: ResidenceService) {
    this.variable = r.a;
  }
}
