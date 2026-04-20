import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class ErrorComponent implements OnInit {
  errorMessage = 'An Error Ocurred! Contact Support at ***-***'

  constructor() { /* empty */ }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() { /* empty */ }
}
