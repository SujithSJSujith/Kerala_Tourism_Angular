import { Component } from '@angular/core';
import {  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }

}
