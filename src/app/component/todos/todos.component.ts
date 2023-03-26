import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []

  inputTodo: string = ""

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First todo",
        complete: false
      },
      {
        content: "Secodn todo",
        complete: false
      }
    ]
  }

  toggleDone(id: number) {
    this.todos.forEach((v,i)=>{
      if(i === id) v.complete = !v.complete
    })
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter((v,i)=> i !== id)
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      complete: false
    })
    this.inputTodo = ""
  }
}
