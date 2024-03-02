import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../models/user.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  user: UserDTO

  constructor(){
    this.user = new UserDTO('', '');
  }

  ngOnInit(): void{}

  checkLogin(): void{
    console.log('Email:'+ this.user.email);
    console.log('Password:'+ this.user.password);
  }
}
