import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from '../Services/show.service';
import { moviesModel, ShowModal, TicketModel } from '../Models';
import { MovieService } from '../Services/movie.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  isLoading = false;
  isProcessing = false;

  showId!: number;
  showDeatils: ShowModal = {};

  movieDetails: moviesModel = {};
  selectedSeat: { [key: string]: boolean } = {};
  seatCount!: number;
  seats: { [key: string]: boolean } = {};

  myTicket: TicketModel = {};

  private snackBar = inject(MatSnackBar);
  constructor(
    private route: ActivatedRoute,
    private _service: ShowService,
    private _movieservices: MovieService
  ) {}

  theaterName = 'Star-Vue Cinemas';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const id = params['showId'];
      this.showId = id;
      this._service.getShowById(this.showId).subscribe({
        next: (data: any) => {
          this.showDeatils = data;
          this.seats = JSON.parse(this.showDeatils.seats!);
          this._movieservices
            .getMovieById(this.showDeatils.movieID!)
            .subscribe({
              next: (data: any) => {
                this.movieDetails = data;
              },
              error(err: any) {
                console.log(err);
              },
            });
        },
        error(err: any) {
          console.log(err);
        },
      });
    });
    this._service.selectedSeat$.subscribe({
      next: (data: any) => {
        this.selectedSeat = data;
        this.seatCount = Object.keys(this.selectedSeat).length;
      },
      error(err: any) {
        console.log(err);
      },
    });
  }

  setIsLoading() {
    this.isLoading = !this.isLoading;
  }
  generateTicket() {
    this.myTicket.ticketID = 0;
    this.myTicket.count = this.seatCount;
    this.myTicket.movieID = this.movieDetails.movieID;
    this.myTicket.seats = JSON.stringify(this.selectedSeat);
    this.myTicket.showID = this.showDeatils.showID;
    this.myTicket.userID = 1;
  }

  bookTickets() {
    this.isProcessing = true;
    const count = Object.keys(this.selectedSeat).length;
    if (count > 0) {
      this.setIsLoading();
      for (let seat in this.selectedSeat) {
        this.seats[seat] = true;
      }
      this.showDeatils.seats = JSON.stringify(this.seats);
      this._service.updateShow(this.showDeatils).subscribe({
        next: (data: any) => {
          this.generateTicket();
          this._service.addTicket(this.myTicket).subscribe({
            next: (data: any) => {
              console.log(data);
            },
            error(err: any) {
              console.log(err);
            },
          });
          console.log(data);
        },
        error: (err: any) => {
          console.log(err);
          this.snackBar.open('UnAble to Book the seats', 'close', {
            duration: 3000,
          });
        },
      });
      setTimeout(() => {
        this.isProcessing = false;
      }, 2000);
    } else {
      this.snackBar.open('select atleast one seat', 'close', {
        duration: 3000,
      });
    }
  }
}
