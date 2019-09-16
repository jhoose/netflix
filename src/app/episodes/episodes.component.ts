import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  faStar = faStar;

  @Input() lang: any;

  constructor() { }

  ngOnInit() {
  }

  get sortedEpisodes() {
    const episodesArray = this.lang.episodeList;

    // console.log('Episodes Array:');
    // console.log(episodesArray);

    return episodesArray.sort((a: any, b: any) => {
      return a.chapter - b.chapter;
    });
  }

}
