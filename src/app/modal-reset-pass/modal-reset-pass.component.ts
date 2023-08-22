import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-reset-pass',
  templateUrl: './modal-reset-pass.component.html',
  styleUrls: ['./modal-reset-pass.component.scss'],
})
export class ModalResetPassComponent  implements OnInit {
  email: string = '';
  resetForm = new FormGroup({
    email : new FormControl('',Validators.required)
  })
  constructor(
    private authService : AuthService,
    private fb :FormBuilder,
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {
  }

  resetPass(){
    this.authService.resetPassword(this.email)
  }
  cerrar(){
    this.modalCtrl.dismiss()
  }

}
