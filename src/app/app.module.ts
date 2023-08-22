import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { ModalCrearTaskComponent } from './modal-crear-task/modal-crear-task.component';
import { ModalResetPassComponent } from './modal-reset-pass/modal-reset-pass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalCrearTaskComponent,
    ModalResetPassComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => {
      const auth = getAuth();
      return auth;
    }), 
    provideFirestore(() => {
      const firestore = getFirestore()
      return firestore;
    }), 
    provideMessaging(() => getMessaging())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
