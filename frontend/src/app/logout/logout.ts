import { Component, inject, OnInit } from '@angular/core';
import { HardcodedAuthentication } from '../services/hardcoded-authentication';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class LogoutComponent implements OnInit {
  private hardcodedAuthentication = inject(HardcodedAuthentication);
  
  ngOnInit(): void {
    this.hardcodedAuthentication.logout();
  }
}
