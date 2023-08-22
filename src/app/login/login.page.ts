import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalResetPassComponent } from '../modal-reset-pass/modal-reset-pass.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService : AuthService,
    private modalCtrl : ModalController,
    private loadingCtrl: LoadingController,

    ) { }

  ngOnInit() {
    
  }

  async login(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...', // Mensaje a mostrar
      duration: 500 // Duración en milisegundos (opcional)
    });

    await loading.present();
    this.authService.login(this.email,this.password);
    

  }
  
  async loginG(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...', // Mensaje a mostrar
      duration: 1000 // Duración en milisegundos (opcional)
    });

    await loading.present();
    this.authService.loginG();
    

  }

  async resetPassword(){
    const modal = await this.modalCtrl.create({
      component : ModalResetPassComponent,
    })
    modal.present();
    //this.authService.resetPassword(this.email);
  }

}
