import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterCardComponent } from "./character-card/character-card.component";
import { SelectClassComponent } from "./select-class/select-class.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterCardComponent, SelectClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CyberpunkGame';
}
