import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../../models/movie.model";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  @Input() movieList:Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
