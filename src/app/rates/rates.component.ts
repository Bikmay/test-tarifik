import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { race } from 'rxjs';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  rates : any;
  constructor() {
        this.rates =this.getRates();
  }

  ngOnInit(): void {

  }

  getRates(): any{
    let request = new XMLHttpRequest();
    request.open('GET','https://tarifnik.ru/rabota/api/data_controller',false);
    request.send();
    console.log(request);
    return JSON.parse(request.response);
  }

}
