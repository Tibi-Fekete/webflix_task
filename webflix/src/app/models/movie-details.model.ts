import {Genre} from "./genre.model";

export interface MovieDetails {
  adult: boolean,
  backdrop_path: string | null,
  belongs_to_collection: null | any,
  budget: number,
  genres: Genre[],
  homepage: string | null,
  id: number,
  imdb_id: string | null,
  original_language: string,
  original_title: string,
  overview: string | null,
  popularity: number,
  poster_path: string | null,
  production_companies: any[],
  production_countries: any[],
  release_date: string,
  revenue: number,
  runtime: number | null,
  spoken_languages: any[],
  status: string,
  tagline: string | null,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
