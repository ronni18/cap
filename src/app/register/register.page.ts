import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  register = () =>{
    console.log(this.email);
    console.log(this.password);
    this.authService.register(this.email,this.password)

  }

}
