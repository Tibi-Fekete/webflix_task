import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilMethodsService {

  constructor() { }

  public textListingCommaEditor(list: any[], currentElement: string, index: number): string {
    if(index < list.length - 1) {
      return currentElement +', ';
    } else {
      return currentElement;
    }
  }


  public genreListingCommaEditor(list: any[] ,currentElement: string, index: number): string {
    switch (index) {
      case 0 :
        if(index === list.length -1 ){
          return currentElement;
        } else {
          return currentElement + ', '
        }
      case 1 :
        return  currentElement;
      default :
        return '';
    }
  }
}
