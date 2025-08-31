import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { UserService } from '../../shared/services/userService';
import { Credentials } from '../../shared/interfaces/auth';
import { jwtDecode } from 'jwt-decode';
import { LoggedinUser } from '../../shared/interfaces/user';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin implements OnInit {
  userService = inject(UserService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      const accessToken = params['token'];
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        const decodedTokenSubject = jwtDecode(accessToken) as unknown as LoggedinUser;

        this.userService.user$.set({
          username: decodedTokenSubject.username,
          email: decodedTokenSubject.email,
          roles: decodedTokenSubject.roles
        });
        this.router.navigate(['user-registration-example'])
      };
    });
  };

  onSubmit() {
    console.log(this.form.value);
    const credentials = this.form.value as Credentials

    this.userService.loginUser(credentials)
    .subscribe({
      next: (response) => {
        console.log("Logged in", response);
        const accessToken = response.data;
        localStorage.setItem('accessToken', accessToken);

        const decodedTokenSubject = jwtDecode(accessToken) as unknown as LoggedinUser
        console.log(decodedTokenSubject);

        // assign access token payload contents to signal variable user
        this.userService.user$.set({
          username: decodedTokenSubject.username,
          email: decodedTokenSubject.email,
          roles: decodedTokenSubject.roles
        });
        console.log("Signal:", this.userService.user$());

        this.router.navigate(['app-user-registration-example']);
      },
      error: (error) => {
        console.log("Not logged in",error)
      }
    });
  };

  googleLogin() {
    this.userService.redirectToGoogleLogin();
  }
};
