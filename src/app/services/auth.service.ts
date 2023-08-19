import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { signInWithRedirect } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly auth = inject(Auth);
  private readonly googleProvider = new GoogleAuthProvider;

  constructor(
    private router:Router,
    private alertCtrl: AlertController,
    ) { }

  async register(email:string, password: string): Promise<void>{

  }

  login = (email:string, password: string) => {


  }
  
  async loginG():Promise<void> {
    try {
      
      await signInWithRedirect( this.auth, this.googleProvider)
    } catch (error) {
      console.log(error);
      
    }
   
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

  resetPassword(email:string){
    
  }

  
}
