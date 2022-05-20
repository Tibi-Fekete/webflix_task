import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MovieListResult} from "../models/movie-list-result.model";
import {GenresResult} from "../models/genre.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly BASE_URL: string = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }

  public getMovies(query: string, page: number): Observable<MovieListResult> {
    console.log('service: ', query, page);

    return this.http.get<MovieListResult>(this.BASE_URL + 'search/movie',
      {params: {
        api_key: environment.api_key,
        language: 'en-US',
        query: query,
        page: page
        }})
  }

  public getGenres(): Observable<GenresResult> {
    return this.http.get<GenresResult>(this.BASE_URL + 'genre/movie/list',
      {params: {
          api_key: environment.api_key,
          language: 'en-US',
        }})
  }

  public getMovieDetails(id: number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + `movie/${id}`,
      {params: {
          api_key: environment.api_key,
          language: 'en-US',
        }})
  }
}
