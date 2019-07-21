import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: Router) { }
  newProd = {name: "", price: Number, img: ""}
  err: any;

  ngOnInit() {
    this.newProd = {name: "", price: Number, img: ""}
  }

  onSubmit(){
    console.log("OnSubmit", this.newProd)
    this._httpService.create(this.newProd).subscribe(data => {
      console.log("Data:" , data);
      if(data['products']){
        this._route.navigate(['/products'])
      } else {
        this.err = data['error']['errors'];
        console.log(data);
      }
    })
  }

}
