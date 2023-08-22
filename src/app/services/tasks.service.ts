import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  firestore: Firestore = inject(Firestore);

  constructor(
  //  private firestore : Firestore,
  ) { }

  saveTasks(task:any){
    const tasks = collection(this.firestore, 'tasks')
    return addDoc(tasks, task)

  }
  deleteTask(task:any){

  }
  
}
