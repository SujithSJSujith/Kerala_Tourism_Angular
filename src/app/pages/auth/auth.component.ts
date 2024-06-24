import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../../components/signin/signin.component';
import { SignupComponent } from '../../components/signup/signup.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SigninComponent,SignupComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  display:string = 'block';
  button_name:string = 'Sign Up';
  displayNot:string ='';

  closeAuth(){
    localStorage.setItem('showAuthForm', JSON.stringify(0));
  }
  getStyleSI(){
    return 'display:'+this.display+';';
  }

  getStyleSU(){
    this.displayNot = (this.display === 'none') ? 'block' : 'none';
    return 'display:'+this.displayNot+';';
  }

  sign(){
    this.display = (this.display === 'none') ? 'block' : 'none';
    this.button_name = (this.button_name === 'Sign Up') ? 'Sign In' : 'Sign Up';
    console.log('display:'+this.display+';');
  }
}
