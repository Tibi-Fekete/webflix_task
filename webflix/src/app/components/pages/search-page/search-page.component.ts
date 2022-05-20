import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {MovieListResult} from "../../../models/movie-list-result.model";
import {Movie} from "../../../models/movie.model";
import {Genre} from "../../../models/genre.model";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public movies: Movie[] = [];
  public genres: Genre[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getGenres().subscribe({
      next: (genresResult) => {
        this.genres = genresResult.genres
      },
      error: () => {
      },
      complete: () => {
        this.movieService.getMovies('star wars', 1).subscribe(
          (movies) => {
            this.getMovieListAndMapGenres(movies);
            this.movies = movies.results
          }
        );
      },
    })
  }


  private getMovieListAndMapGenres(movieList: MovieListResult) {
    movieList.results.forEach(movie => {
      movie.genres = movie.genre_ids
        .map(id => this.genres
          .find(genre => genre.id === id))
        .map(genre => genre ? genre.name : 'No genre were given')
    })
  }

}
