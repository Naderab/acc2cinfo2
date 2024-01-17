import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  residence: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
    }),
    parking: new FormControl(''),
    image: new FormControl(''),
    category: new FormControl('basic'),
    appartments: new FormArray([new FormControl('')]),
    jardin: new FormArray([new FormControl('')]),
  });
  name: FormControl = new FormControl('');
  TestAdd() {
    console.log(this.residence);
    console.log(this.residence.getRawValue());
    /*this.residence.patchValue({
      name: 'Test from ts',
      address: 'Test from ts',
      image: 'Test from ts',
    });*/
    console.log(this.residence.getRawValue());
    console.log(this.appartments);
  }

  /**  ajoutControl() {
    this.residence.addControl('test',new FormControl(''));
  }*/
  addControl() {
    this.appartments.push(new FormControl(''));
  }
  get appartments() {
    return this.residence.get('appartments') as FormArray;
  }

  get jardin() {
    return this.residence.get('jardin') as FormArray;
  }
}
