import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent {

  carArr: [{name: string, year: number}] = [{
    name: 'default',
    year: 2015
  }]


  updateCarList(car: {name: string, year: number}) {
    this.carArr.push(car);
  }

}
