import { Component } from '@angular/core';
import { EpersonTemplateDrivenForm } from '../eperson-template-driven-form/eperson-template-driven-form';
import { PersonTable } from '../person-table/person-table';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';
import { EPerson } from '../../shared/interfaces/eperson';

@Component({
  selector: 'app-template-driven-form-example',
  standalone: true,
  imports: [EpersonTemplateDrivenForm, PersonTable, SimpleDatatable],
  templateUrl: './template-driven-form-example.html',
  styleUrl: './template-driven-form-example.css'
})
export class TemplateDrivenFormExample {
  persons: EPerson[] = [];
  currentPerson: EPerson = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    education: ''
  };

  onPerson(data: EPerson) {
    this.persons.push(data);
    this.currentPerson = data;
    console.log("Father", this.persons)
  };
};
