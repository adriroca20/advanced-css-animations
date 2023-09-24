import { Component, OnInit } from '@angular/core';
import { todoItem } from './todoItem';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit{
  todoList!: todoItem[];

  ngOnInit():void{
    this.todoList = [
      {
        id: "tarea1",
        content: "Tarea 1",
        done: false
      },
      {
        id: "tarea2",
        content: "Tarea 2",
        done: false
      },
      {
        id: "tarea3",
        content: "Tarea 3",
        done: false
      },
      {
        id: "tarea4",
        content: "Tarea 4",
        done: false
      }
    ]
  }
  toggleCompleted(index:number):void{
    if(index > 0 && !this.todoList[index-1].done ){
      return;
    }
    if(index < this.todoList.length-1 && this.todoList[index+1].done ){
      return;
    }
    //Si el indice es igual al length, se hace esto
    this.todoList[index].done = !this.todoList[index].done;
  }
}
