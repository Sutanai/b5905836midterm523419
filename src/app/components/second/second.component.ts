import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    id:  new FormControl(''),
    name:  new FormControl('',[Validators.required]),
    detail: new FormControl('',[Validators.required]),
    quantity:  new FormControl('',[Validators.required]),
    price:  new FormControl('',[Validators.required])
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor() { }

  ngOnInit(): void {
  }
  addProduct(){
    
  }
}
