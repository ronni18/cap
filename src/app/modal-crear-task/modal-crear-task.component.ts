import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modal-crear-task',
  templateUrl: './modal-crear-task.component.html',
  styleUrls: ['./modal-crear-task.component.scss'],
})
export class ModalCrearTaskComponent  implements OnInit {
  title: string = '';
  task : string = '';
  user : any;
  saveTaskForm = new FormGroup({
    title : new FormControl('',Validators.required),
    task : new FormControl('',Validators.required)
  })
  constructor(
    private tasksService: TasksService,
    private modalCtrl : ModalController,
    private alertCtrl: AlertController,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.authService.userState$.subscribe(r=>{
      if (r) {
        this.user = r;
      }
    });
  }

  saveTasks(){
    let task:any = this.saveTaskForm.value
    task.creador = this.user.uid
    this.tasksService.saveTasks(this.saveTaskForm.value).then(resp => {

      this.modalCtrl.dismiss()
    }).catch(error =>{
      this.modalCtrl.dismiss()
      this.alert('Error al crear la tarea !!')

    })
  }
  
  cerrar(){
    this.modalCtrl.dismiss()
  }

  async alert(message:string){
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: message,
      buttons: ['ok']
    })

    await alert.present();
  }
}
