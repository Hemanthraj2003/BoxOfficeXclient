import { Component, OnInit } from '@angular/core';
import { moviesModel } from 'src/app/Models';
import { ViewerservicesService } from '../services/viewerservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _service: ViewerservicesService,
    private _movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  showID: number = 1;
  latestMovies: moviesModel[] = [];

  ngOnInit(): void {
    this._service.GetLatestMovies().subscribe({
      next: (data: any) => {
        console.log(data);
        this.latestMovies = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  SearchForMovies() {
    this.router.navigate([{ outlets: { home: ['show'] } }], {
      relativeTo: this.route,
      queryParams: { showId: this.showID },
    });
  }

  selectedMovie(movieId?: number) {
    console.log(movieId);
    this.router.navigate(['/user', { outlets: { viewer: ['getShows'] } }], {
      replaceUrl: true,
      queryParams: { movieId: movieId },
    });
  }

  //variable required for search function
  fetchedData: moviesModel[] = [];
  firstChar: string = '';
  filtered: moviesModel[] = [];
  ngvalue: string = '';
  //end
  // search function
  onInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    if (this.ngvalue.length == 0) {
      this.firstChar = '';
      this.filtered = [];
    } else if (input.length == 1) {
      this.firstChar = input.charAt(0);
      this._movieService.getMoviesByFirstChar(this.firstChar).subscribe({
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
