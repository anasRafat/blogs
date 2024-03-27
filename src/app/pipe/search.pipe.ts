import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(arr: any[], text_search: string): any {
    if (text_search == undefined) {
      return arr;
    } else {
      return arr.filter( (arr) =>{
        return arr.title.toUpperCase().includes(text_search.toUpperCase());
      });
    }
  }
}
