import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthComponent } from '../../pages/auth/auth.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,AuthComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  getStyle(){
    console.log("style for authentication");
    if(1 === JSON.parse(localStorage.getItem('showAuthForm') as string))
      return 'display:block;'
    else 
      return 'display:none;'

  }

  authenticationForm(){
    localStorage.setItem('showAuthForm', JSON.stringify(1));
  }

}
