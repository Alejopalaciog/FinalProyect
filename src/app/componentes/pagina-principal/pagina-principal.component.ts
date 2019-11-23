import { CellInterface } from './../../interface/cell-interface';
import { ApiService } from './../../servicios/api.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor() { }
  private cells: CellInterface;
  ngOnInit(){
    //this.getCells();
  }
  getCells(){
    //this.dataApi.getAllCells().subscribe((cells: CellInterface) => (this.cells = cells))
  }
}
