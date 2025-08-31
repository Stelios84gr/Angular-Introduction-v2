import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,  // declare form & form-fields
  FormGroup,  // group of fields
  ReactiveFormsModule,  // understand Angular in HTML
  Validators
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from '../../shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './eperson-reactive-form.html',
  styleUrl: './eperson-reactive-form.css'
})
export class EpersonReactiveForm {
  @Output() person = new EventEmitter<EPerson>()
  
  // form = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   lastName: new FormControl('', Validators.required),
  //   age: new FormControl(18, [
  //     Validators.required,
  //     Validators.pattern('^[0-9]*$'),
  //     Validators.min(18),
  //     Validators.max(100)
  //   ]),
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.email
  //   ]),
  //   education: new FormControl('', Validators.required)
  // });

  // OR

  form = new FormGroup<{
    firstName: FormControl<string>,
    lastName: FormControl<string>,
    age: FormControl<number>,
    email: FormControl<string>,
    education: FormControl<string>
  }>({
    firstName: new FormControl(
      '', {nonNullable: true,
        validators: Validators.required}
    ),
    lastName: new FormControl(
      '', {nonNullable: true,
        validators: Validators.required}
      ),
    age: new FormControl(
      18, {nonNullable: true, validators: [
        Validators.required,
        Validators.min(18),
        Validators.max(100)]}
      ),
      email: new FormControl(
        '', {nonNullable: true,
          validators: [
            Validators.required,
            Validators.email]}
          ),
      education: new FormControl(
        '', {nonNullable: true,
          validators: Validators.required}
      )
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
      // ??: if leftExpression: undefined => rightExpression
      const person: EPerson = {
        firstName: this.form.value.firstName ?? '',
        lastName: this.form.value.lastName ?? '',
        age: String(this.form.value.age) ?? '',
        email: this.form.value.email ?? '',
        education: this.form.value.education ?? ''
      };
      this.person.emit(person);
      this.form.reset();
    };
    // console.log("Data:", data);
    // console.log(this.form);
    // console.log("firstName:",this.form.controls['firstName'].value)
    // console.log("lastName:", this.form.get('lastName')?.value);
  };

  onSetValue() {
    this.form.setValue({
      firstName: "John",
      lastName: "Doe",
      age: 30,
      email: "john@aueb.gr",
      education: "Bachelor's degree"
    });
    // affect specific form element - overrides if above
    this.form.controls['firstName'].setValue("a");
  };
};
