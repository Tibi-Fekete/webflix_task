import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../../../models/movie.model";
import {UtilMethodsService} from "../../../../utils/util-methods.service";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  @Input() public movieList:Movie[] = [];
  @Output() public movieIdEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor(private utilMethods: UtilMethodsService) { }

  ngOnInit(): void {
  }

  public openDetailsModal(movieId: number): void {
    this.movieIdEmitter.emit(movieId);
  }

  public genreListingCommaEditor(list: any[]  ,currentElement: string, index: number): string {
    return this.utilMethods.genreListingCommaEditor(list, currentElement, index);
  }

}
