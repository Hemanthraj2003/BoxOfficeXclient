import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { moviesModel } from '../Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  private url: string = 'https://localhost:7299/api/';

  putMovie(record: moviesModel) {
    return this.http.post(this.url + 'MovieModels', record);
  }

  getMoviesByFirstChar(keyWord: string): Observable<moviesModel[]> {
    return this.http.get<moviesModel[]>(this.url + 'MovieModels/' + keyWord);
  }

  getMovieById(id: number): Observable<moviesModel> {
    return this.http.get<moviesModel>(this.url + 'MovieModels/id?id=' + id);
  }
}
