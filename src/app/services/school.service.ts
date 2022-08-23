import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { personDB } from '../db/PersonDB';
import { Person } from '../models/Person';

@Injectable({ providedIn: 'root' })
export class SchoolService {
  constructor() {}

  addPerson(data: Person): void {
    personDB.personTable.add(data);
  }

  getPersonList(): Observable<Person[]> {
    return from(personDB.personTable.toArray());
  }

  cleanList(): Person[] {
    personDB.personTable.clear();
    return [];
  }
}
