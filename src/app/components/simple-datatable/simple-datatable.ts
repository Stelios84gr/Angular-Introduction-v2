import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, effect, inject } from '@angular/core';
import { EPerson } from '../../shared/interfaces/eperson';
import { sortBy } from 'lodash-es';
// import { PersonService } from '../../shared/services/person';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.html',
  styleUrl: './simple-datatable.css'
})
export class SimpleDatatable implements OnChanges {
  @Input() data: EPerson[] | undefined;
  @Input() myData: boolean = true;
  @Output() personClicked = new EventEmitter<EPerson>();

  // personService = inject(PersonService);

  epersonsData: EPerson[] = [];

  // constructor() {
  //   effect(() => {
  //     if(this.personService.modifiedDataTable()) {
  //       this.epersonsData = this.data;
  //     };
  //     this.personService.modifiedDataTable.set(false);
  //   });
  // };

  sortOrder = {
    firstName: 'none',
    lastName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  };

  // set what to do depending on what input variable changes
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
    this.epersonsData = this.data;
    };
    if (changes['myData']) {
      console.log("MyData");
    };
  };

  onPersonClicked(person: EPerson): void {
    console.log("Person: ", person);
    this.personClicked.emit(person);
  };

  sortData(sortKey: keyof EPerson): void {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc';
      this.epersonsData = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.epersonsData = sortBy(this.data, sortKey);
    };
    // console.log(this.sortOrder); FIX THIS

    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key as keyof EPerson] = 'none';
      };
    };

    console.log("Simple DataTable", this.sortOrder, this.data);
  };

  sortSign(sortKey: keyof EPerson) {
    if (this.sortOrder[sortKey] === 'asc') return '\u2191';
    else if (this.sortOrder[sortKey] === 'desc') return '\u2193';
    else return '';
  };
};