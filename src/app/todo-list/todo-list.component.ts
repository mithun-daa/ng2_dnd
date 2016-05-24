import { Component, OnInit } from '@angular/core';
import { TodoService} from './todo-list.service';
import { TodoComponent, Todo } from '../todo';
import { MakeDraggable, MakeDroppable } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css'],
  providers: [TodoService],
  directives: [TodoComponent, MakeDraggable, MakeDroppable]
})
export class TodoListComponent implements OnInit {
  todos:Todo[];
  
  constructor(private _todoSvc: TodoService) {}

  ngOnInit() {
    this.todos = this._todoSvc.getTodos();
  }

  onDrop(src: Todo, trg: Todo) {
    this._moveRow(src.order, trg.order);
  }
  
  _moveRow(src, trg) {
    src = parseInt(src);
    trg = parseInt(trg);
    
    // If the element was moved down
    if (src > trg) {
      for (let i = trg; i < src; i++) {
        this.todos[i].order++;
      }
    } else {  // if the element was moved up
      for (let i = src + 1; i <= trg; i++) {
        this.todos[i].order--;
      }
    }
    this.todos[src].order = trg;
    this.todos.sort((a, b) => a.order - b.order);
  }
}
