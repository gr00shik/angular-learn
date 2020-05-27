import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  title = "Cars service"

  inputName = 'Введите имя';
  inputYear = 'Введите год';

  carName = null;
  carYear = 2015;

  @Output() onAddCar = new EventEmitter<{name: string, year: number}>();

  validCar () {
    return this.carName && this.carYear;
  }

  addNewCar () {
    this.onAddCar.emit({
      name: this.carName,
      year: this.carYear
    })
    this.carName = null;
    this.carYear = 2015;
  }

}
