import { Component, VERSION } from '@angular/core';
import { Person } from './models/Person';
import { SchoolService } from './services/school.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  person: Person;
  personList: Person[];

  constructor(public school$: SchoolService) {
    this.person = new Person();
    this.getList();
  }

  savePerson(): void {
    this.school$.addPerson(this.person);
    this.person = new Person();
    this.getList();
  }

  getList(): void {
    this.school$.getPersonList().subscribe((p) => {
      this.personList = p;
    });
  }

  cleanList(): void {
    this.personList = this.school$.cleanList();
  }
}
