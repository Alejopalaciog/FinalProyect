import { ApiService } from './../../service/api.service';
import { cellInterface } from './../../interface/cell-interface';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cell-list',
  templateUrl: './cell-list.component.html',
  styleUrls: ['./cell-list.component.css']
})
export class CellListComponent implements OnInit {

  constructor(private apiService: ApiService,private location: Location) {
    
   }
  
  private cells: cellInterface;
  ngOnInit() {
    this.getListCellphones();
  }

  getListCellphones(): void{
    this.apiService.getAllCells()
    .subscribe((cells: cellInterface)=>(this.cells = cells));
  }

  /*onDelete(cellForm: NgForm){
    this.apiService.updateCellphone(cellForm.value).subscribe(cell=> location.reload());
  }*/
  onDelete(id: string):void{
    this.apiService.deleteCellphone(id)
    .subscribe();
  }
}
