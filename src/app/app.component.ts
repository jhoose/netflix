import { Component } from '@angular/core';
import { LanguageService } from './language.service.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang = 'en_US';

  constructor(
    private language: LanguageService
  ) {
    language.use('en_US').then(() => {
      // console.log('Current JSON data file dump:');
      // console.log(language.data);
    });
  }

  setLang(lang: string) {
    this.language.use(lang);
  }

}
