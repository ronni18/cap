import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TasksService } from '../services/tasks.service';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
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
    private tasksService: TasksService,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {
    this.tasksService.tasks$.subscribe(tasks => {
      this.authService.userState$.subscribe(r=>{
        if (r?.uid) {
          this.tasks = tasks.filter(task => task.creador === r.uid)
        }
      })
      
    })
  }

  logout(){
    this.authService.logout();
  }

  async deleteTask(task:any){
    const deleteTask = await this.presentActionSheet('Eliminar tarea ?');
    
    if(!deleteTask) return;
    
    this.tasksService.deleteTask(task).then(resp => {
      this.alert('Tarea eliminada !!', '')

    }).catch(error =>{
      this.alert('Error al crear la tarea !!', 'Error')

    })
  }

  async createTask(){
    const modal = await this.modalCtrl.create({
      component:ModalCrearTaskComponent
    })

    modal.present();
  }

  async alert(message:string, header:string){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['ok']
    })

    await alert.present();
  }

  async presentActionSheet(header:string): Promise<boolean> {
    return new Promise<boolean>(async (resolve) => {
      const actionSheet = await this.actionSheetCtrl.create({
        header: header,
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              resolve(true);
            },
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              resolve(false);
            },
          },
        ],
      });
  
      await actionSheet.present();
    });
  }
  

}
