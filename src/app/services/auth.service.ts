import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Auth, GoogleAuthProvider, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithRedirect } from 'firebase/auth';


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

  get userState$() {
    return authState(this.auth)
  }
   

  async register(email:string, password: string): Promise<void>{
    const {user} = await createUserWithEmailAndPassword(this.auth,email, password)
    await this.sendEmailVerification(user)
  }

  async sendEmailVerification(userCredential:any):Promise<void>{
    try {
      
      await sendEmailVerification(userCredential)
    } catch (error) {
      
    }
  }

  login = async (email:string, password: string) => {
    await signInWithEmailAndPassword(this.auth, email, password)

  }
  
  async loginG():Promise<void> {
    try {
      
      await signInWithRedirect( this.auth, this.googleProvider)
    } catch (error) {
      console.log(error);
      
    }
   
  }

  async logout() {
    this.auth.signOut();

  }

  async alert(message:string){
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: message,
      buttons: ['ok']
    })

    await alert.present();
  }

  async resetPassword(email:string){
    await sendPasswordResetEmail(this.auth, email)
    
  }

  
}
