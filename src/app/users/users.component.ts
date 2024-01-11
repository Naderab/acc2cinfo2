import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
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
}
