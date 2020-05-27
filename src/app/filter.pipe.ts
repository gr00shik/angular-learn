import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(cars, carName: string, fieldName: string) {
    if (cars.length === 0 || carName === '') {
      return cars;
    }
    return cars.filter(car => car[fieldName].toLowerCase().indexOf(carName.toLowerCase()) !== -1);
  }

}
