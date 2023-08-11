import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router
    ) { }

  async register(email:string, password: string): Promise<void>{

  }

  login = (email:string, password: string) => {


  }
  
  async loginG() {
   
  }

  async logout() {

  }

  
}
