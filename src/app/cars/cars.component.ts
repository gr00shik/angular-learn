import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  carYear = '';
  validCar = this.carName || this.carYear

  carArr = []

  addNewCar () {
    if (!this.carName || !this.carYear) {
      return;
    }
    this.carArr.push({name: this.carName, year: this.carYear})
    this.carName = '';
    this.carYear = '';
  }

}
