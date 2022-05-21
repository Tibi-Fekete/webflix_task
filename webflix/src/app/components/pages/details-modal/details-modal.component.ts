import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieDetails} from "../../../models/movie-details.model";
import {UtilMethodsService} from "../../../utils/util-methods.service";

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {

  @Input() public display: boolean = false;
  @Input() public movie?: MovieDetails;
  @Output() public closeModalEmitter: EventEmitter<void> = new EventEmitter<void>()

  constructor(private utilMethods: UtilMethodsService) { }

  ngOnInit(): void {
  }

  public closeModal(): void {
    this.display = false;
    this.closeModalEmitter.emit();
  }

  public textListingEditor(list: any[], currentElement: any, index: number): string {
    return this.utilMethods.textListingCommaEditor(list, currentElement, index);
  }


}
