import { Component } from '@angular/core';
import 'rxjs-compat';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  search = ''

  name = "PipeComponent";
  pi = Math.PI;
  money = 3;
  date = "2020-05-05 12:30:30";
  object = {
    name: "name",
    age: 35
  }

  cars = [
    {name: "Audi", description: 'test1'},
    {name: "Ford", description: 'test2'},
    {name: "BMV", description: 'test2'}
  ]

  asyncTitle = Observable.of("My async text").delay(3000);

  addCar = () => {
    this.cars.push({name: "Otta", description: "test9"})
  }

}
