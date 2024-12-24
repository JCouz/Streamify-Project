import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Movie {
  title: string;
  genre: string;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [
    { title: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
    { title: 'The Godfather', genre: 'Crime', rating: 9.2 },
    { title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
    { title: '12 Angry Men', genre: 'Drama', rating: 9.0 },
    { title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
    { title: 'The Good, the Bad and the Ugly', genre: 'Western', rating: 8.8 },
  ];

  getMovies(): Observable<Movie[]> {
    return of(this.movies);
  }
}
