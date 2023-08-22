import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import  {GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithPopup, signInWithRedirect} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router,
    private auth: AngularFireAuth,
    private alertctrl: AlertController,

    ) { }

  async register(email:string, password: string){
    try {
      
      const {user} = await this.auth.createUserWithEmailAndPassword(email,password);

      user?.sendEmailVerification();
    } catch (error) {
      const message = JSON.parse(JSON.stringify(error)).customData?._tokenResponse?.error?.message;
      this.alert(message)
      
    }


  }

  login = (email:string, password: string) => {

    this.auth.signInWithEmailAndPassword(email,password).then(resp => {
      this.router.navigate(['/home']);
    }).catch(error => {
      this.alert('Verificar las credenciales')
      
    })


  }
  
  async loginG() {
   return signInWithRedirect(getAuth(), new GoogleAuthProvider())
  }

  async logout() {
    try {
      return this.auth.signOut();
      
    } catch (error) {
      this.alert('No se pudo cerrar la session');
    }

  }
  async alert(message:string){
    const alert = await this.alertctrl.create({
      header: 'Error',
      message: message,
      buttons: ['ok']
    })

    await alert.present();
  }

  resetPassword(email:string){
    return sendPasswordResetEmail(getAuth(),email)
  }


  
}
