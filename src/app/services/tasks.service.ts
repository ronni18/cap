import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor(
  //  private firestore : Firestore,
  ) {
    const tasks = collection(this.firestore, 'tasks')
    this.tasks$ = collectionData(tasks, {idField: 'id'}) as Observable<any[]>;
   }

  saveTasks(task:any){
    const tasks = collection(this.firestore, 'tasks')
    return addDoc(tasks, task)

  }
  deleteTask(task:any){

  }
 //
  
}
