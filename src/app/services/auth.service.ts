import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router,
    private alertCtrl: AlertController,
    ) { }

  async register(email:string, password: string): Promise<void>{

  }

  login = (email:string, password: string) => {


  }
  
  async loginG() {
   
  }

  async logout() {

  }
  async alert(message:string){
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: message,
      buttons: ['ok']
    })

    await alert.present();
  }

  
}
