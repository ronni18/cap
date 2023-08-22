import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Firestore, addDoc, collection} from '@angular/fire/firestore';
import { TasksService } from '../services/tasks.service';
import { ModalController } from '@ionic/angular';
import { ModalCrearTaskComponent } from '../modal-crear-task/modal-crear-task.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



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
    private firestore : Firestore,
    private tasksService: TasksService,
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }
  saveTask(task:any){
    const tasks = collection(this.firestore, 'tasks')
    return addDoc(tasks, task)
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
