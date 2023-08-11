import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';

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
    private loadingCtrl: LoadingController,

    ) { }

  ngOnInit() {
    
  }

  async login(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...', // Mensaje a mostrar
      duration: 1000 // Duración en milisegundos (opcional)
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

}
