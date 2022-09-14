import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Show } from "src/model/show.model";
import { ReplaySubject } from "rxjs";
import {
  tap,
  shareReplay,
  map,
  withLatestFrom
} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ShowsService {
  private shows$ = new ReplaySubject<Array<Show>>(1);

  constructor(private httpClient: HttpClient) {}

  getShows() {
    this.httpClient
      .get<Array<Show>>("http://localhost:4201/api/shows")
      .subscribe(shows => this.shows$.next(shows));

    return this.shows$.asObservable();
  }

  toggleFavoriteShow(id, isFavorite) {
    const url = isFavorite
      ? `http://localhost:4201/api/shows/${id}/favorite`
      : `http://localhost:4201/api/shows/${id}/unfavorite`;

    return this.httpClient.post<Show>(url, {}).pipe(
      withLatestFrom(this.shows$),
      map(([newShow, shows]) =>
        shows.map(show =>
          show.id === id ? newShow : show
        )
      ),
      tap(shows => this.shows$.next(shows))
    );
  }
}
