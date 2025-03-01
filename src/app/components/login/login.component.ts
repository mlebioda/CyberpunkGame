import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router, not RouterOutlet
import { SelectUserTypeComponent } from '../select-user-type/select-user-type.component';
import { routes } from '../../app.routes'; 

@Component({
  selector: 'app-login',
  imports: [],  // Router is provided via DI, no need to import here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {} // Inject Router here

  createSessionClickHandler(event: MouseEvent) {
    console.log('user clicked create session button');
    this.router.navigate(['/selectUserType']);
  }

  joinSessionClickHandler(event: MouseEvent) {
    console.log('user clicked join session button');
    this.router.navigate(['/selectUserType']);
  }
}
