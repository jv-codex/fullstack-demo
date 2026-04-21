import { CommonModule } from '@angular/common';
import { Component, signal, effect, inject, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtodos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listtodos.html',
  styleUrls: ['./listtodos.css'],
})
export class ListTodosComponent implements OnInit {
  // todos = signal([
  //   {id:1, description: 'Learn to Dance'},
  //   {id:2, description: 'Become an Expert at Angular'},
  //   {id:3, description: 'Visit India'}
  // ]);

  // todo = signal({
  //   id : 1,
  //   description : 'Learn to Dance'
  // });
  //todos = signal<{ id: number; description: string }[]>([]);
  todoService = inject(TodoService);

  constructor() { /* empty */ }
    // Load from localStorage
    //const saved = localStorage.getItem('todos');
    //this.todos.set(saved ? JSON.parse(saved) : []);

    // Persist changes to localStorage
    // effect(() => {
    //   localStorage.setItem('todos', JSON.stringify(this.todos()));
    // });
  //}

   
  ngOnInit(): void {
    // initialization logic here
    //throw new Error('Method not implemented.');
    console.log('Todos loaded:', this.todoService.todos());
  }
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  // todos = signal<{ id: number; description: string }[]>([]);

  // constructor() {
  //   const saved = localStorage.getItem('todos');
  //   this.todos.set(
  //     saved
  //       ? JSON.parse(saved)
  //       : [
  //           { id: 1, description: 'Learn to Dance' },
  //           { id: 2, description: 'Become an Expert at Angular' },
  //           { id: 3, description: 'Visit India' },
  //         ],
  //   );

  //   effect(() => {
  //     localStorage.setItem('todos', JSON.stringify(this.todos()));
  //   });
  // }
  todos = signal([
    { id: 1, description: 'Learn to Dance' },
    { id: 2, description: 'Become an Expert at Angular' },
    { id: 3, description: 'Visit India' }
  ]);
}
