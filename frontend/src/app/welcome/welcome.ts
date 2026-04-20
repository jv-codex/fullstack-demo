import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class WelcomeComponent implements OnInit{
  
  message = 'Some Welcome Message'
  //message2 : string = 'Some Welcome Message'  // Typescript inferred from a string literal and remove the type
  private route = inject(ActivatedRoute) 
  name : string | null = null;
  // use inject instead of constructor parameterized
  // constructor(private route:ActivatedRoute) { /* empty */ }
  constructor() { /* empty */ }

  ngOnInit(): void {
    // COMPILATION ERROR this.message = 5
    console.log(this.message)
    this.name = this.route.snapshot.paramMap.get('name')
    //console.log(this.route.snapshot.params['name'])
    console.log(this.name)
  }

}

export class Class1 {

}

export class Class2 {
  
}