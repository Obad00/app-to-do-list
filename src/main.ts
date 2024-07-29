import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Assurez-vous que ce chemin est correct

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
