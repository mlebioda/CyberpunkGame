import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CharacterCardComponent } from './app/character-card/character-card.component'; 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
