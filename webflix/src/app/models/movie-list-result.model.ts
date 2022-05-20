import {Movie} from "./movie.model";

export interface MovieListResult {
  page: number,
  result: Movie[],
  total_result: number,
  total_pages: number
}
