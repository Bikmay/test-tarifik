import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  phoneNumber:string;
  name:string;
  address:string;

  constructor() { }

  ngOnInit(): void {
  }

  submit():void{
    console.log('hhh');
    console.log(this.getName());
    console.log(this.getPhoneNumber());
    console.log(this.getAddress());

    this.refresh();
    if(this.getName() && this.getPhoneNumber() && this.getAddress())
    {
      console.log('sdsd')
      $.ajax({
        url: "https://tarifnik.ru/rabota/api/order_controller",
        dataType: "json",type: "POST",
        data: {
          phone: this.phoneNumber,
          name: this.name,
          address: this.address
        },
        success: function(resp){
          console.log(resp);
        },
        error: function(request, status, error){
          console.log(request.responseText);
        }
      });
    }
  }

  getPhoneNumber():boolean{
    let value =$("#phoneNumber").val();
    if(value.length === 11 && !(/\D/.test(value))){
      this.phoneNumber=value;
      return true;
    }
    else{
      $("#phoneNumber").css('border-color','red')
      return false;
    }
  }

  getName():boolean{
    let value =$("#name").val();
    if(value.length < 80){
      this.name=value;
      return true;
    }
    else{
      $("#name").css('border-color','red')
      return false;
    }
  }

  getAddress():boolean{
    let value =$("#address").val();
    if(value.length < 255){
      this.address=value;
      return true;
    }
    else{
      $("#address").css('border-color','red')
      return false;
    }
  }

  refresh():void{
    $("#address").css('border','none');
    $("#name").css('border','none');
    $("#phoneNumber").css('border','none');
  }

}
