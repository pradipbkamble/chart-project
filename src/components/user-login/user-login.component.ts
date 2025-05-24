import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';

import { UserApiService } from '../../service/user-api.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    CommonModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelect,
    MatCardModule,
    MatButton,
    MatFormFieldModule,
    MatInput,
    NgIf,
    MatDatepickerModule,
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent implements OnInit {
  signInForm!: FormGroup;
  signUpForm!: FormGroup;
  isLogin = false;
  constructor(private fb: FormBuilder, private _userApi: UserApiService) {}

  ngOnInit() {
    this.userForm();
    this. userSignUpForm()
  }
  userForm() {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  userSignUpForm() {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gmail: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      securityq:[null],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form Submitted', this.signInForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  signIn() {
   
    this.isLogin = false;
  }
  signUp(){
     this._userApi.checkUser({ ...this.signUpForm.value }).subscribe((res) => {
      console.log(res);
    });
  }
}
