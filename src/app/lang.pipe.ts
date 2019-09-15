import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service.js';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  constructor(
    private language: LanguageService
  ) {}

  // default pipe logic upon pipe creation
  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }

  transform(key: any): any {
    return this.language.data[key] || key;
  }

}
