import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HardcodedAuthentication } from '../../services/hardcoded-authentication';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent { //implements OnInit {
  public hardcodedAuthentication = inject(HardcodedAuthentication);
  
}
