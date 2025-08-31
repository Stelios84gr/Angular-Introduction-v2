import { Component, Inject, inject } from '@angular/core';
// data
import { EPerson, ManyPerson } from '../../shared/interfaces/eperson';
// parent component to which output data will be sent
import { SimpleDatatable } from '../simple-datatable/simple-datatable';
//
import {
  Dialog,
  DialogRef,  // used for .close()
  DIALOG_DATA,  // used for data used in the pop-up
  DialogModule
} from '@angular/cdk/dialog';

@Component({
  selector: 'app-output-example',
  standalone: true,
  imports: [DialogModule, SimpleDatatable],
  templateUrl: './output-example.html',
  styleUrl: './output-example.css'
})
export class OutputExample {
  manyPerson = ManyPerson;
  dialog = inject(Dialog);

  showPersonClicked(person: EPerson) {
    console.log("Component Output", person);
    // creates a pop-up dialog - atr1: component to to be used for this pop-up atr2: data to use
    this.dialog.open(PersonDialogComponent, { data:person });
  };

  personTemplate(person: EPerson) {
    return `
    Person Details:

    First Name: ${person.firstName}
    Last Name: ${person.lastName}
    Age: ${person.age}
    E-mail: ${person.email}
    Education: ${person.education}
    `
  };
};

@Component({
  standalone: true,
  imports: [],
  // instead of templateUrl
  template: `
  <table class="table table-bordered w-50">
    <caption>Person Details</caption>
    <tr class="border-b border-gray-300">
      <td class="font-semibold text-right pr-2">First Name</td>
      <td class="pl-2">{{ person.firstName }}</td>
    </tr>
    <tr class="border-b border-gray-300">
      <td class="font-semibold text-right pr-2">Last Name</td>
      <td class="pl-2">{{ person.lastName }}</td>
    </tr>
    <tr class="border-b border-gray-300">
      <td class="font-semibold text-right pr-2">Age</td>
      <td class="pl-2">{{ person.age }}</td>
    </tr>
    <tr>
      <td class="font-semibold text-right pr-2">E-mail</td>
      <td class="pl-2">{{ person.email }}</td>
    </tr>
    <tr>
      <td class="font-semibold text-right pr-2">Education</td>
      <td class="pl-2">{{ person.education }}</td>
    </tr>
  </table>
  <button class="inline-block font-medium rounded bg-blue-600 text-white px-3 py-1 text-sm hover:bg-blue-700" (click)="dialogRef.close()">Close</button>
  `,
  //instead of styleUrl
  styles: [
    `
    :host {
      display: block;
      background:#fff;
      border-radius: 8px;
      padding: 16px;
      max-width: 500px;
    }
    `
  ]
})
export class PersonDialogComponent {
  dialogRef = inject(DialogRef);
  constructor(
    @Inject(DIALOG_DATA) public person: EPerson
  ){}
};