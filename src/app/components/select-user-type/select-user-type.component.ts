import { Component } from '@angular/core';

@Component({
  selector: 'app-select-user-type',
  imports: [],
  templateUrl: './select-user-type.component.html',
  styleUrl: './select-user-type.component.css'
})
export class SelectUserTypeComponent {

    gmHandler(event: MouseEvent) {
      console.log('Selected Mode: GM')
    }

    screenHandler(event: MouseEvent) {
      console.log('Selected Mode: Screen')
    }

    playerHandler(event: MouseEvent) {
      console.log('Selected Mode: Player')
    }
  }