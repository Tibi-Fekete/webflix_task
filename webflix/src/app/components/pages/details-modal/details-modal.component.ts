import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieDetails} from "../../../models/movie-details.model";

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {

  @Input() public display: boolean = false;
  @Input() public movie?: MovieDetails;
  @Output() public closeModalEmitter: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  public closeModal(): void {
    this.display = false;
    this.closeModalEmitter.emit();
  }

}
