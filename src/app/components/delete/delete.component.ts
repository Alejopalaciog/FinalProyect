import { cellInterface } from './../../interface/cell-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor() { }
  private cell: cellInterface={
    id:"",
    name:"",
    manufacturerCompany:"",
    screen:"",
    processor:"",
    ram:"",
    storage:"",
    os:"",
    characteristicsCamera:"",
    quantityCameras:"",
    battery:"",
    weight:"",
    price:"",
    color:"",
    sound:"",
    image:"",
    hide:""
  }
  ngOnInit() {
  }

}
