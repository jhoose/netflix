import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EpisodesComponent } from './episodes/episodes.component';

import { LanguageService } from './language.service';
import { HttpClientModule } from '@angular/common/http';
import { LangPipe } from './lang.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// export function setupTranslateFactory(
//   service: LanguageService): Function {
//   return () => service.use('en_US');
// }

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InspirationComponent,
    GalleryComponent,
    EpisodesComponent,
    LangPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    LanguageService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: setupTranslateFactory,
    //   deps: [ LanguageService ],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
