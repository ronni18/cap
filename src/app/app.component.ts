import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private auth: AngularFireAuth,
    private alert: AlertController,
    private router: Router,

    ) {
    this.auth.authState.subscribe(user => {
      if (user?.emailVerified) {
        // El usuario está autenticado
        router.navigate(['/home'])
      } else {
        router.navigate(['/login'])
        // El usuario no está autenticado
      }
    });
  }
}
