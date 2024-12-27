import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShowModal, TicketModel } from '../Models';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  constructor(private http: HttpClient) {}
  private url: string = 'https://localhost:7299/api/';

  // refer: https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
  private selectedSeatSubject = new BehaviorSubject<{ [key: string]: boolean }>(
    {}
  );
  selectedSeat$ = this.selectedSeatSubject.asObservable();

  toggleSelectedSeat(seat: string): void {
    const currentSeats = this.selectedSeatSubject.getValue();

    if (currentSeats[seat]) {
      delete currentSeats[seat];
    } else {
      currentSeats[seat] = true;
    }

    this.selectedSeatSubject.next(currentSeats);
  }

  getSelectedSeat(): { [key: string]: boolean } {
    return this.selectedSeatSubject.getValue();
  }

  addShow(record: ShowModal) {
    return this.http.post(this.url + 'ShowModels', record);
  }

  updateShow(record: ShowModal) {
    return this.http.put(this.url + 'showModels/' + record.showID, record);
  }

  getShowsForMovie(movieId: number): Observable<ShowModal[]> {
    return this.http.get<ShowModal[]>(
      this.url + 'ShowModels/movieId?movieId=' + movieId
    );
  }

  getShowById(showId: number): Observable<ShowModal> {
    return this.http.get<ShowModal>(this.url + 'ShowModels/' + showId);
  }

  addTicket(record: TicketModel): Observable<TicketModel> {
    return this.http.post<TicketModel>(this.url + 'TicketModals', record);
  }
}
