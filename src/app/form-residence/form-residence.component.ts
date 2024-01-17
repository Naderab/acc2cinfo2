import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  residence: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('',[Validators.pattern('[A-Za-z]*')]),
    }),
    parking: new FormControl(''),
    image: new FormControl(''),
    category: new FormControl('basic'),
    appartments: new FormArray([new FormControl('')]),
    jardin: new FormArray([new FormControl('')]),
  });
  //name: FormControl = new FormControl('');
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

  get name() {
    return this.residence.get('name') as FormControl
  }

  get jardin() {
    return this.residence.get('jardin') as FormArray;
  }

  get city() {
    return this.residence.get('address')!.get('city') as FormControl
  }
}
