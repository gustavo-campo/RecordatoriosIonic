import { Todo, TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
 
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
 
  todo: Todo = {
    title: 'Titulo de la tarea',
    task: 'Detalle',
    createdAt: new Date().getTime(),
    priority: 1
  };
 
  todoId = null;
 
  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController, private emailComposer: EmailComposer) { }
 
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }
 
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }
 
  async saveTodo() {
 
    const loading = await this.loadingController.create({
      message: 'Guardando registro...'
    });
    await loading.present();
 
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.goBack();
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.goBack();
      });
    }
  }

  shareTodoEmail(title: string, task: string, priority: number, createdAt: string) {
      var tiempo = new Date(createdAt);
      let email = {
        to: 'gustavo.campo@gmail.com',
        subject: 'Recordatorio: ' + title,
        body: 'Usted creo el siguiente recordatorio<br><br>\"<b>' + task + '</b><br> con fecha de creacion: <br><b>' + tiempo + '</b>\"',
        isHtml: true
      };
   
      this.emailComposer.open(email);
  }
 
}