import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { ModalController } from '@ionic/angular';
import { ModalCrearTaskComponent } from '../modal-crear-task/modal-crear-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 tasks:any = new Array();
  constructor(
    private authService : AuthService,
    private fb :FormBuilder,
    private tasksService: TasksService,
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {
    this.tasks.push({title:'prueba', task: 'task de prueba para todo el dia'})
  }

  logout(){
    this.authService.logout();
  }

  deleteTask(task:any){
    this.tasksService.deleteTask(task)
  }

  async createTask(){
    const modal = await this.modalCtrl.create({
      component:ModalCrearTaskComponent
    })

    modal.present();
  }

}
