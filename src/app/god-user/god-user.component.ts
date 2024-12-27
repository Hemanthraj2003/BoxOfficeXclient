import { Component } from '@angular/core';
import { moviesModel } from '../Models';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-god-user',
  templateUrl: './god-user.component.html',
  styleUrls: ['./god-user.component.css'],
})
export class GodUserComponent {
  constructor(private _serive: MovieService) {}
  newMovie = new moviesModel();

  putMovie() {
    this.newMovie.movieID = 0;
    console.log(this.newMovie);
    this._serive.putMovie(this.newMovie).subscribe({
      next(value: any) {
        console.log(value);
      },
      error(err: any) {
        console.log(err);
      },
    });
  }
}
