import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Firestore, addDoc, collection} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private authService : AuthService,
    private firestore : Firestore
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

}
