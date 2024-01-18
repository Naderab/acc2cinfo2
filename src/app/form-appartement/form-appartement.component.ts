import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-appartement',
  templateUrl: './form-appartement.component.html',
  styleUrls: ['./form-appartement.component.css'],
})
export class FormAppartementComponent {
  appartement: FormGroup = new FormGroup({
    appartNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
    ]),
    floorNumber: new FormControl('', [
      Validators.required,Validators.pattern('[0-9]*'),
    ]),
    surface: new FormControl('', [Validators.required]),
    terace: new FormControl('', [Validators.required]),
    surfaceTerace: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required,Validators.minLength(10)]),
    residence: new FormControl('', [Validators.required]),
  });

  get appartNumber() {
    return this.appartement.get('appartNumber') as FormControl;
  }

  get floorNumber() {
    return this.appartement.get('floorNumber') as FormControl;
  }

  get surface() {
    return this.appartement.get('surface') as FormControl;
  }

  get terace() {
    return this.appartement.get('terace') as FormControl;
  }

  get surfaceTerace() {
    return this.appartement.get('surfaceTerace') as FormControl;
  }

  get category() {
    return this.appartement.get('category') as FormControl;
  }

  get description() {
    return this.appartement.get('description') as FormControl;
  }

  get residence() {
    return this.appartement.get('residence') as FormControl;
  }

  
}
