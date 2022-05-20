import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {MovieListResult} from "../../../models/movie-list-result.model";
import {Genre} from "../../../models/genre.model";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public query: string = "star wars";
  public page: number = 1;
  public movieResults?: MovieListResult;
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
        this.getMovieListAndMapGenres(this.query, 1);
      },
    })
  }


  private getMovieListAndMapGenres(query: string, page: number) {
    console.log('lefut')
    this.movieService.getMovies(query, page).subscribe(
      (movies) => {
        console.log(movies)
        this.movieResults = movies;
        this.movieResults.results.forEach(movie => {
          movie.genres = movie.genre_ids
            .map(id => this.genres
              .find(genre => genre.id === id))
            .map(genre => genre ? genre.name : 'No genre were given')
        })
      }
    );


  }

  paginate(event: any) {
    this.page = event.page + 1;
    this.getMovieListAndMapGenres(this.query, this.page)
  }
}
