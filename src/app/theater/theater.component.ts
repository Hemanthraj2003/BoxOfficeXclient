import { Component } from '@angular/core';
import { MovieService } from '../Services/movie.service';
import { moviesModel, ShowModal } from '../Models';
import { ShowService } from '../Services/show.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css'],
})
export class TheaterComponent {
  constructor(
    private _service: MovieService,
    private _showService: ShowService
  ) {}

  isMoviesModal: boolean = false;

  showData: ShowModal = { showID: 0 };

  toggleIsMoviesModal() {
    this.isMoviesModal = !this.isMoviesModal;
  }

  setMovieId(ID: number) {
    this.showData.movieID = ID;
    this.showData.theaterID = 1;
    this.toggleIsMoviesModal();
    this.showData.seats = JSON.stringify({
      A1: false,
      A2: false,
      A3: false,
      A4: false,
      A5: false,
      A6: false,
      A7: false,
      A8: false,
      B1: false,
      B2: false,
      B3: false,
      B4: false,
      B5: false,
      B6: false,
      B7: false,
      B8: false,
      C1: false,
      C2: false,
      C3: false,
      C4: false,
      C5: false,
      C6: false,
      C7: false,
      C8: false,
      D1: false,
      D2: false,
      D3: false,
      D4: false,
      D5: false,
      D6: false,
      D7: false,
      D8: false,
      E1: false,
      E2: false,
      E3: false,
      E4: false,
      E5: false,
      E6: false,
      E7: false,
      E8: false,
    });
  }

  addShow() {
    this._showService.addShow(this.showData).subscribe({
      next: (value: any) => {
        console.log(value);
      },
      error(err: any) {
        console.log(err);
      },
    });
  }

  // search function for movies
  fetchedData: moviesModel[] = [];
  firstChar: string = '';
  filtered: moviesModel[] = [];
  ngvalue: string = '';
  onInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    if (this.ngvalue.length == 0) {
      this.firstChar = '';
      this.filtered = [];
    } else if (input.length == 1) {
      this.firstChar = input.charAt(0);
      this._service.getMoviesByFirstChar(this.firstChar).subscribe({
        next: (data: moviesModel[]) => {
          this.fetchedData = data;
          console.log(this.fetchedData);
        },
        error(err: any) {
          console.log(err);
        },
      });
      this.filteredMovies(input);
    } else {
      console.log(input);

      this.filteredMovies(input);
    }
  }

  filteredMovies(key: string): void {
    this.filtered = this.fetchedData.filter((movie) => {
      return movie.title?.toLowerCase().startsWith(key.toLowerCase());
    });
  }
}
