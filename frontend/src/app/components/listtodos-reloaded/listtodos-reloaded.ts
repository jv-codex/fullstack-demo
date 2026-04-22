import { Component, inject, Injectable, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-listtodos-reloaded',
  standalone: true,
  templateUrl: './listtodos-reloaded.html',
  styleUrl: './listtodos-reloaded.css',
})
export class ListtodosReloadedComponent implements OnInit {
  todoService = inject(TodoService);

  ngOnInit(): void {
    console.log('Todos Reloaded:', this.todoService.todos());
  }
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  todos = signal([
    { id: 1, description: 'Learn to Dance' },
    { id: 2, description: 'Become an Expert at Angular' },
    { id: 3, description: 'Visit India' }
  ]);
}
