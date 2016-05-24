import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list';

@Component({
  moduleId: module.id,
  selector: 'ng2-dnd-app',
  templateUrl: 'ng2-dnd.component.html',
  styleUrls: ['ng2-dnd.component.css'],
  directives: [TodoListComponent]
})
export class Ng2DndAppComponent {
  title = 'To-dle-do';
}
