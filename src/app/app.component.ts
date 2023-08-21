import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private readonly authSvc = inject(AuthService);
  constructor(
    private auth: Auth,
    private router : Router
    ) {
      
      this.userState();
      
    }
    
    async userState(){
      console.log(this.auth);
      return this.authSvc.userState$
        .pipe(
          take(1),
          tap((isLogetIn) =>{
            isLogetIn ? this.router.navigate(['/home']) : true
          })
        )
    }
}
