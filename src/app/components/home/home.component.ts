import { cellInterface } from './../../interface/cell-interface';
import { ApiService } from '../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  private cells: cellInterface;
  ngOnInit(){
    //this.getCells();
  }
  getCells(){
    //this.dataApi.getAllCells().subscribe((cells: CellInterface) => (this.cells = cells))
  }
}
