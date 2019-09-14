import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EpisodesComponent } from './episodes/episodes.component';

import { LanguageService } from './language.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InspirationComponent,
    GalleryComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
