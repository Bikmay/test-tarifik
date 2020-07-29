import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  buttonContet:any;

  constructor() {
    if(document.body.clientWidth < 361){
      this.buttonContet='<img src="../../assets/phone.svg"/>'
    }
    else{
      this.buttonContet = '8 800 111 11 11';
    }
   }

  ngOnInit(): void {
  }

  showDropdownMenu():void{
    $('.header-home-dropdoun').css('visibility', 'visible');
    $('.home').css('border-bottom','3px solid blue');
  }
  closeDropdownMenu():void{
    $('.header-home-dropdoun').css('visibility', 'hidden');
    $('.home').css('border-bottom','none');
    console.log('xyu')
  }
}
