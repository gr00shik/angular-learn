import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'powPipe'
})
export class PowPipe implements PipeTransform {

  transform(value: any, powNumber: number = 1): any {
    return Math.pow(value, powNumber);
  }

}
