import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {Observable} from "rxjs";
import {MovieListResult} from "../../../models/movie-list-result.model";
import {Movie} from "../../../models/movie.model";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
   this.movieService.getMovies('star wars', 1).subscribe(
     (movies) => {
       console.log(movies)
       this.movies = movies.result
     }
   );
  }

}
