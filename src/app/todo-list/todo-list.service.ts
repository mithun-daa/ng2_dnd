import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable()
export class TodoService {
    getTodos(): Todo[] {
        return [
            {order: 0, description: 'Clean up code'},
            {order: 1, description: 'Blog about it'},
            {order: 2, description: 'Push code to Github'},
            {order: 3, description: 'Share blog on twitter'},
        ];
    }
} 