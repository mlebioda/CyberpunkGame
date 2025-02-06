import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  character = {
    name: 'Vega Novak',
    role: 'Netrunner',
    streetCred: 5,
    skills: ['Hacking', 'Stealth', 'Cyberpsychosis Awareness']
  };

  constructor() { }

  ngOnInit(): void {}

  displayDetails(): void {
    alert(`Character details of ${this.character.name}`);
  }
}
