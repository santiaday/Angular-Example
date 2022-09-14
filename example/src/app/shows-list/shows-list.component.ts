import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {

  shows$ = this.showsService.getShows();

  constructor(private showsService: ShowsService) { }

  ngOnInit() {
  }

  toggleFavorite(id, isFavorite) {
    this.showsService.toggleFavoriteShow(id, isFavorite).subscribe();
  }

}
