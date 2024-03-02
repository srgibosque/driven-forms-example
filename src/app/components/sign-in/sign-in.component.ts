import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserDTO } from '../../models/user.dto';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user: UserDTO;

  constructor(){
    this.user = new UserDTO('', '', '', '', '', new Date());
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log('Email:'+ this.user.email);
      console.log('Password:'+ this.user.password);
      console.log('Alias:'+ this.user.alias);
      console.log('Name:'+ this.user.name);
      console.log('Surname:'+ this.user.surname);
      console.log('Birth:'+ this.user.birth);
    } else {
      console.log('Invalid form');
    }
  }

}
