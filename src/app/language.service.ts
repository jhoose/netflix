import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  data: any = {};

  constructor(
    private http: HttpClient
  ) { }

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/i18n/${lang || 'en_US'}.json`;
      // const langPath = `assets/i18n/${lang || 'la_PG'}.json`;

      // console.log('On Language Service | Use method | json file:');
      // console.log(langPath);

      this.http.get<{}>(langPath).subscribe(
        language => {
          this.data = Object.assign({}, language || {});

          // console.log('Language Service | current data:');
          // console.log(this.data);

          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }

}
