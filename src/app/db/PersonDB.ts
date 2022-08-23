import Dexie from 'dexie';
import { Person } from '../models/Person';

export class PersonDB extends Dexie {
  personTable: Dexie.Table<Person>;

  constructor() {
    super('school');
    this.version(1).stores({
      personTable: '++id, name, lastName, age',
    });
  }
}

export const personDB = new PersonDB();
