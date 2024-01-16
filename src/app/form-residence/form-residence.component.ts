import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  residence: FormGroup = new FormGroup({
    name: new FormControl(""),
    address: new FormControl(''),
    image:new FormControl('')
  });
  name: FormControl = new FormControl('');
  TestAdd() {
    console.log(this.residence);
    console.log(this.residence.getRawValue());
    this.residence.patchValue({
      name: 'Test from ts',
      address: 'Test from ts',
      image:'Test from ts'
    })
    console.log(this.residence.getRawValue());
  }

  ajoutControl() {
    this.residence.addControl('test',new FormControl(''));
  }

  getTest() {
    return this.residence.get('test');
  }
}
