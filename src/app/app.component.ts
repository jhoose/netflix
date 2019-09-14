import { Component } from '@angular/core';

import English from '../assets/i18n/en_US.json';
import Latin from '../assets/i18n/la_PG.json';

import { LanguageService } from './language.service.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'netflix';
  title = English.heading;
  // title = Latin.heading;

  constructor(private language: LanguageService) {
    language.use('en_US').then(() => {
      console.log('Current JSON data file dump:');
      console.log(language.data);
    });
  }

}
