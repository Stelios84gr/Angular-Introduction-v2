import { Component, inject } from '@angular/core';
import { EpersonReactiveForm } from '../eperson-reactive-form/eperson-reactive-form';
import { PersonTable } from '../person-table/person-table';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';
import { EPerson } from '../../shared/interfaces/eperson';
// import { PersonService } from '../../shared/services/person';
@Component({
  selector: 'app-reactive-form-example',
  imports: [
    EpersonReactiveForm,
    PersonTable,
    SimpleDatatable
  ],
  standalone: true,
  templateUrl: './reactive-form-example.html',
  styleUrl: './reactive-form-example.css'
})
export class ReactiveFormExample {
  // personsService = inject(PersonService);
  persons: EPerson[] = [];
  currentPerson: EPerson | undefined;

  onPerson(data: EPerson) {
    console.log("Father:", this.persons);
    // so that ngOnChanges understands array changes
    this.persons = [...this.persons, data];
    // this.personsService.modifiedDataTable.set(true);
  };
};
