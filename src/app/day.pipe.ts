import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return new Date(value*1000).getDay();
  }

}
