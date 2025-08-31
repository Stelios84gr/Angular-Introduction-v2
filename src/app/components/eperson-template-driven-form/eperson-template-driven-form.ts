import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from '../../shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-template-driven-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
],
  templateUrl: './eperson-template-driven-form.html',
  styleUrl: './eperson-template-driven-form.css'
})
export class EpersonTemplateDrivenForm {
  @Output() person = new EventEmitter<EPerson>()
  //select the DOM element - {static:false}: check eForm after template has been loaded
  @ViewChild('eForm', { static:false }) form: NgForm | undefined;

  // get form elements and do something
  onSubmit(value: EPerson) {
    console.log(value);
    console.log(this.form);
    console.log(this.form?.form.get('firstName')?.value);
    console.log(this.form?.form.controls['lastName'].value);
    // sends data from child to parent who sends them to person-datatable
    this.person.emit(value);
  };

  onSetValue() {
      // affect all form elements
    this.form?.setValue({
      firstName: "John",
      lastName: "Doe",
      age: "30",
      email: "john@aueb.gr",
      education: "Bachelor's degree"
    });
    // affect specific form element - overrides if above
    this.form?.form.controls['firstName'].setValue("a");
  };
};
