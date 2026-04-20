import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtodos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listtodos.html',
  styleUrl: './listtodos.css',
})
export class ListTodosComponent implements OnInit {

  todo= {
    id : 1,
    description : 'Learn to Dance'
  }
  
  constructor() { /* empty */ }

  ngOnInit(): void {
    // initialization logic here
    throw new Error('Method not implemented.');
  }
}
