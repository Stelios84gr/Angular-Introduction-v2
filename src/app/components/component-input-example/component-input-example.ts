import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTable } from '../person-table/person-table';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTable],
  templateUrl: './component-input-example.html',
  styleUrl: './component-input-example.css'
})
export class ComponentInputExample {
  person0: Person = {
    firstName: 'Stelios',
    lastName: 'Fridakis',
    age: 41,
    email: 'stilfridakis@aueb.gr',
    address: '27, Laskou Str.'
  };

  person1: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
    email: 'jdoe@aueb.gr',
    address: 'Athens, Greece'
  };
};