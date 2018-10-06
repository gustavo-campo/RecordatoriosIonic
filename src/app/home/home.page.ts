import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { AlertController } from '@ionic/angular';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  todos: Todo[];
  result: boolean;
 
  constructor(private todoService: TodoService, public alertController: AlertController) { }
 
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }
 
  remove(item) {
    this.todoService.removeTodo(item.id);
  }

  async removeConfirm(item) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: 'Está seguro de marcar la tarea como finalizada?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
            //result = false;
            //console.log(result + "adentro de la funcion");
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.remove(item);
            //result = true;
            //console.log(result + "adentro de la funcion");
          }
        }
      ]
    });

    await alert.present();
  }

}