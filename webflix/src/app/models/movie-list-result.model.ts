import {Movie} from "./movie.model";

export interface MovieListResult {
  page: number,
  results: Movie[],
  total_result: number,
  total_pages: number
}
