import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import{MatCard} from '@angular/material/card'
import{MatInput} from '@angular/material/input'
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatButton} from '@angular/material/button'
import { UserApiService } from '../../service/user-api.service';
import { log } from 'node:console';






@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatCard,MatButton,MatFormFieldModule,MatInput,NgIf],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent implements OnInit {
  signInForm!:FormGroup
  isRegistered=true;
  constructor(private fb: FormBuilder, private _userApi:UserApiService) {}
 
  ngOnInit() {
    this.userForm();
  }
   userForm() {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form Submitted', this.signInForm.value);
    } else {
      console.log('Form is invalid');
    }

  }
  signIn(){
    this._userApi.checkUser({...this.signInForm.value}).subscribe(res=>{
      console.log(res);
      
    })
    
    
  }


}
