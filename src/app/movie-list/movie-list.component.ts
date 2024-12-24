import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  searchQuery: string = '';
  ratingFilter: number = 0;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  get filteredMovies(): Movie[] {
    if (!this.movies || this.movies.length === 0) {
      return [];
    }

    return this.movies.filter((movie) => {
      const searchMatch =
        !this.searchQuery ||
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        movie.genre.toLowerCase().includes(this.searchQuery.toLowerCase());
      const ratingMatch = movie.rating >= this.ratingFilter;
      return searchMatch && ratingMatch;
    });
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.ratingFilter = 0;
  }
}
