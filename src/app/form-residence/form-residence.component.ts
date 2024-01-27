import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceConsumerService } from '../core/services/residence-consumer.service';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {

  id!: number;
  constructor(private ac: ActivatedRoute, private rs: ResidenceService, private r: Router, private rs2: ResidenceConsumerService) {
    this.id = this.ac.snapshot.params['id'];

    if (this.id !== undefined) {
      this.rs2.getResidenceById(this.id).subscribe({
        next: (data) => this.residence.patchValue(data),
        error: (err) => {
          alert("Residence not found");
          this.r.navigate(['/listResidence'])
        }
      })
    }
  }
  // residence: FormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl('', [Validators.pattern('[A-Za-z]*')]),
  //   }),
  //   parking: new FormControl(''),
  //   image: new FormControl(''),
  //   category: new FormControl('basic'),
  //   appartments: new FormArray([new FormControl('')]),
  //   jardin: new FormArray([new FormControl('')]),
  // });

  residence: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address:  new FormControl(''),
    image: new FormControl(''),
  });
  //name: FormControl = new FormControl('');
  TestAdd() {
    //this.rs.addResidence(this.residence.value);
    if (this.id !== undefined) {
      this.rs2.updateResidence(this.id,this.residence.value).subscribe({
        next: () => this.r.navigate(['/listResidence']),
      });
    }
    else {
      this.rs2.addResidence(this.residence.value).subscribe({
        next: () => this.r.navigate(['/listResidence'])
      })
    }
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
    return this.residence.get('name') as FormControl;
  }

  get jardin() {
    return this.residence.get('jardin') as FormArray;
  }

  get city() {
    return this.residence.get('address')!.get('city') as FormControl;
  }
}
