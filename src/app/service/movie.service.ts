import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Movie {
  title: string;
  genre: string;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'assets/movies.json';
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }
}
