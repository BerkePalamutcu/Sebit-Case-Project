import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringElipsis',
})
export class StringElipsisPipe implements PipeTransform {
  transform(text: string): string {
    if (text.length > 280) {
      return text.substring(0, 280) + '...';
    } else {
      return text;
    }
  }
}
