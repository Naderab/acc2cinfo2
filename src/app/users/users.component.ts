import { Component } from '@angular/core';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private rs: ResidenceService) {}
  person = { name: 'Jhon', age: 30 };
  array = [1, 2, 3, 4, 5];
  searchText: string = '';
  arrayOfPerson: any = [
    {
      picture: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Jhon',
      age: 30,
      quantity: 1,
    },
    {
      picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      name: 'Jane',
      age: 15,
      quantity: 0,
    },
  ];

  Buy(person: any) {
    person.quantity--;
  }

  search() {
    this.arrayOfPerson = this.arrayOfPerson.filter(
      (p: any) => p.name === this.searchText
    );
  }

  change() {
    this.rs.changeA();
  }
}
