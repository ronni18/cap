import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  user$!: Observable<any>;
  private readonly authSvc = inject(AuthService);

  constructor(
    private authService : AuthService,
    private loadingCtrl: LoadingController,

    ) { }

  ngOnInit() {
    this.user$ = this.authSvc.userState$
    
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
    //console.log(this.user$);
    
    

  }

  resetPassword(){
    this.authService.resetPassword(this.email);
  }

}
