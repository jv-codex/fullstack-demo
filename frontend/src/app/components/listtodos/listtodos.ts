import { DatePipe } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ) {}
}

@Component({
  selector: 'app-listtodos',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './listtodos.html',
  styleUrls: ['./listtodos.css'],
})
export class ListTodosComponent implements OnInit {
  // todos = signal([
  //   { id: 1, description: 'Learn to Dance' },
  //   { id: 2, description: 'Become an Expert at Angular' },
  //   { id: 3, description: 'Visit India' },
  // ]);

  todos = signal([
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date()),
  ]);

  ngOnInit(): void {
    console.log('Todos loaded:', this.todos());
  }
}
