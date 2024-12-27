import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewerservicesService {
  constructor(private http: HttpClient) {}
  private url: string = 'https://localhost:7299/api/';

  GetLatestMovies() {
    return this.http.get(this.url + 'MovieModels');
  }

  SearchForMovies(keyWord: string) {
    return this.http.get(this.url + 'MovieModels/' + keyWord);
  }

  GetMyTickets(userID: number) {
    return this.http.get(this.url + 'TicketModals/userID?userID=' + userID);
  }

  GetMyTranscations() {
    return this.http.get(this.url + 'TranscationModals/userID?userID=1');
  }

  GetMyDetails() {
    return this.http.get(this.url + 'UserModals/1');
  }
}
