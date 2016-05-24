import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  moduleId: module.id,
  selector: 'todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo:Todo;
   
  constructor() {}

  ngOnInit() {}
}
