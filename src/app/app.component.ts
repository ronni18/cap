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
      this.authSvc.userState$.subscribe(r=>{
        if (r) {
          this.router.navigate(['/home'])
        }
      });
     
    }
}
