import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router,
    private auth: AngularFireAuth,
    private alert: AlertController,

    ) { }

  async register(email:string, password: string){
    try {
      
      const {user} = await this.auth.createUserWithEmailAndPassword(email,password);

      user?.sendEmailVerification();
    } catch (error) {
      const message = JSON.parse(JSON.stringify(error)).customData?._tokenResponse?.error?.message;
      this.alertE(message)
      
    }


  }

  login = (email:string, password: string) => {


  }
  
  async loginG() {
   
  }

  async logout() {

  }

  async alertE(message:string){
    const alert = await this.alert.create({
      header: 'Error',
      message: message,
      buttons: ['ok']
    })

    await alert.present();
  }

  
}
