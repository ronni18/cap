import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-crear-task',
  templateUrl: './modal-crear-task.component.html',
  styleUrls: ['./modal-crear-task.component.scss'],
})
export class ModalCrearTaskComponent  implements OnInit {
  title: string = '';
  task : string = '';
  saveTaskForm = new FormGroup({
    title : new FormControl('',Validators.required),
    task : new FormControl('',Validators.required)
  })
  constructor(
    private tasksService: TasksService,
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {}

  saveTasks(){
    this.tasksService.saveTasks(this.saveTaskForm.value)
  }
  
  cerrar(){
    this.modalCtrl.dismiss()
  }
}
