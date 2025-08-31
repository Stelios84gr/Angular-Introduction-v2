import { Component } from '@angular/core';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';
import { EPerson, ManyPerson } from '../../shared/interfaces/eperson';

@Component({
  selector: 'app-simple-datatable-example',
  standalone: true,
  imports: [SimpleDatatable],
  templateUrl: './simple-datatable-example.html',
  styleUrl: './simple-datatable-example.css'
})
export class SimpleDatatableExample {
  manyPerson = ManyPerson;
};
