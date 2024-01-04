import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  title: string = 'Residence Management System';
  person = { name: 'Jhon', age: 30 };
  array = [1, 2, 3, 4, 5];
  arrayOfPerson = [
    { name: 'Jhon', age: 30 },
    { name: 'Jane', age: 15 },
  ];
}
