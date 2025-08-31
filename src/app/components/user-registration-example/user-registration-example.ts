import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {
  AbstractControl,  FormArray,  // reactive form parent
  FormControl,  // declare form & form-fields
  FormGroup,  // group of fields
  ReactiveFormsModule,  // understand Angular in HTML
  Validators
} from '@angular/forms';
import { UserService } from '../../shared/services/userService';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-user-registration-example',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-registration-example.html',
  styleUrl: './user-registration-example.css'
})
export class UserRegistrationExample {
  userService = inject(UserService);

  registrationStatus: {success: boolean, message: string} = {
    success: false,
    message: 'Not attempted yet.'
  };

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    address: new FormGroup({
      area: new FormControl(''),
      road: new FormControl('')
    }),
    phone: new FormArray([
      new FormGroup({
        number: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required)
      })
    ])
  },
  this.passwordConfirmValidator
);

passwordConfirmValidator(control: AbstractControl): {[key: string]: boolean} | null {
  const form = control as FormGroup;
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;

  if (password && confirmPassword && password !== confirmPassword) {
    form.get('confirmPassword')?.setErrors({passwordMismatch: true});
    return {passwordMismatch: true};
  };

  return null;
};

get phone(): FormArray {
  return this.form.get('phone') as FormArray;
};


addPhoneNumber() {
  this.phone.push(
    new FormGroup({
      number: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    })
  )
};

removePhoneNumber(index: number) {
  this.phone.removeAt(index);
};

checkDuplicateEmail() {
  const email = this.form.get('email')?.value;

  if (email) {
    this.userService.checkDuplicateEmail(email).subscribe({
      next: (response) => {
        console.log(response);
      // duplicateEmail setError now takes place in next because of always receiving status 200 from back-end
        //(response as any): to override typescript strictness and recognise "exists"
        if ((response as any).exists) {
          this.form.get('email')?.setErrors({ duplicateEmail: true });
        } else {
          this.form.get('email')?.setErrors(null);
        }
      },
      error: (err) => {
        console.log("Error checking for duplicate email", err);
      }
    });
  };
};

checkDuplicateUsername() {
  const username = this.form.get('username')?.value;

  if (username) {
    this.userService.checkDuplicateUsername(username).subscribe({
      next: (response) => {
        console.log(response);
        // duplicateUsername setError now takes place in next because of always receiving status 200 from back-end
        //(response as any): to override typescript strictness and recognise "exists"
        if ((response as any).exists) {
          this.form.get('username')?.setErrors({ duplicateUsername: true });
        } else {
          this.form.get('username')?.setErrors(null);
        }
      },
      error: (err) => {
        console.log("Error checking for duplicate username", err);
      }
    });
  };
};

  onSubmit() {
    const data: User = {
      'username': this.form.get('username')?.value || '',
      'password': this.form.get('password')?.value || '',
      'firstName': this.form.get('firstName')?.value || '',
      'lastName': this.form.get('lastName')?.value || '',
      'email': this.form.get('email')?.value || '',
      'address': {
        'area': this.form.controls.address.controls.area?.value || '',
        'road': this.form.controls.address.controls.road?.value || ''
      },
      // add phone in interface, form template etc.
    };
    console.log(data);
    this.userService.registerUser(data)
    .subscribe({
      next: (response) => {
        console.log("User registered successfully.", response);
        this.registrationStatus = { success: true, message: "User registered." }
      },
      error: (response) => {
        console.log("User registration failed.", response.error.data.errorResponse.errmsg);
        this.registrationStatus = { success: false, message: response.error.data.errorResponse.errmsg }
      }
    });
  };

  registerAnother() {
    this.form.reset();
    this.registrationStatus = { success: false, message: "Not attempted yet." };
  };
};
