import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-appartement',
  templateUrl: './form-appartement.component.html',
  styleUrls: ['./form-appartement.component.css'],
})
export class FormAppartementComponent {
  appartement: FormGroup = new FormGroup({
    appartNumber: new FormControl(''),
    floorNumber: new FormControl(''),
    surface: new FormControl(''),
    terace: new FormControl(''),
    surfaceTerace: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    residence: new FormControl(''),
  });
}
