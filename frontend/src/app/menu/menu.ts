import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HardcodedAuthentication } from '../services/hardcoded-authentication';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent { //implements OnInit {
  //isUserLoggedIn = false;
  public hardcodedAuthentication = inject(HardcodedAuthentication);
  
  // ngOnInit(): void {
  //   this.isUserLoggedIn =  this.hardcodedAuthentication.isUserLoggedIn()
  // }

}
