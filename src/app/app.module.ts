import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalResetPassComponent } from './modal-reset-pass/modal-reset-pass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalCrearTaskComponent } from './modal-crear-task/modal-crear-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalResetPassComponent,
    ModalCrearTaskComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
