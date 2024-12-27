import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowService } from '../Services/show.service';
import { moviesModel, ShowModal } from '../Models';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-getshows',
  templateUrl: './getshows.component.html',
  styleUrls: ['./getshows.component.css'],
})
export class GetshowsComponent implements OnInit {
  movieId!: number;
  showsForMovie: ShowModal[] = [];
  selectedMovie: moviesModel = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _services: ShowService,
    private _movieservices: MovieService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.movieId = params['movieId'];
    });
    this._services.getShowsForMovie(this.movieId).subscribe({
      next: (data: any) => {
        this.showsForMovie = data;
      },
      error(err: any) {
        console.log(err);
      },
    });
    this._movieservices.getMovieById(this.movieId).subscribe({
      next: (value: any) => {
        this.selectedMovie = value;
      },
      error(err: any) {
        console.log(err);
      },
    });
  }

  selectShow(showId: number) {
    this.router.navigate(['/user', { outlets: { viewer: ['show'] } }], {
      replaceUrl: true,
      queryParams: { showId: showId },
    });
  }
}

// Star-Vue Cinemas
