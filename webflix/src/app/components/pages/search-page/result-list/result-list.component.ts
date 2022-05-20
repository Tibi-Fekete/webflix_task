import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../../../models/movie.model";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  @Input() public movieList:Movie[] = [];
  @Output() public movieIdEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public openDetailsModal(movieId: number): void {
    this.movieIdEmitter.emit(movieId);
  }

}
