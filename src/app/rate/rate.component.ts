import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  // @Input() name: string;
  // @Input() speed: number;
  // @Input() price: number;
  // @Input() chanelsCount: number;
  // @Input() chanelsCountHD: number;
   @Input() rates: any;

  constructor() {
    console.log(this.rates);
   }

  ngOnInit(): void {
  }

}
