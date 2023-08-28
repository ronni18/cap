import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection, addDoc, doc, deleteDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor(
  ) {
   
        const tasks = collection(this.firestore, 'tasks');
        this.tasks$ = collectionData(tasks,{idField: 'id'});
   
   }

  saveTasks(task:any){
    const tasks = collection(this.firestore, 'tasks')
    return addDoc(tasks, task)

  }
  deleteTask(task:any){
    const taskR = doc(this.firestore, 'tasks/'+task.id)
    return deleteDoc(taskR);
  }
 //
  
}
