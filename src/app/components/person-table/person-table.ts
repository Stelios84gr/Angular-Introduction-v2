import { Component, Input } from '@angular/core';
import { Person } from '../../shared/interfaces/person';import { EPerson } from '../../shared/interfaces/eperson';
;

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.html',
  styleUrl: './person-table.css'
})
export class PersonTable {
  @Input() personInput: Person | EPerson | undefined; // declare type of data to be sent from parent
  name = "Panagiotis"
  addressOReducation: string = '';

  person = {
    firstName: "Panagiotis",
    lastName: "Moschos",
    age: 39,
    email: "pmoschos@aueb.gr"
  };

  isPerson(): boolean {
    if (this.personInput && 'address' in this.personInput) {
    this.addressOReducation = this.personInput.address
    return 'address' in this.personInput;
    };
  return false;
  };

  isEPerson(): boolean {
    if (this.personInput && 'education' in this.personInput) {
    this.addressOReducation = this.personInput.education
    return 'education' in this.personInput;
    };
  return false;
  }; 
};
