import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() langSelectionEvent = new EventEmitter<string>();

  constructor(
    private language: LanguageService
  ) { }

  toggleLang(selectedLang: string) {
    console.log('toggleLang on Nav value:');
    console.log(selectedLang);
    this.langSelectionEvent.emit(selectedLang);
  }

  ngOnInit() {
  }

}
