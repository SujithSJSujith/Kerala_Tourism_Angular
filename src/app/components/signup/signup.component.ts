import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    emailId: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    cpassword: new FormControl('',[Validators.required]),
  });

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }

}
