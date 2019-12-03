import { ApiService } from './../../service/api.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { cellInterface } from './../../interface/cell-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(private apiService: ApiService, private location:Location) { }
  
  ngOnInit() {
  }
  onSave(cellForm: NgForm):void{
    if(cellForm.value.cellId == null){
      this.apiService.saveCellphone(cellForm.value)
      .subscribe(cell => location.reload());
      console.log(cellForm.value);
    }else{
      console.log("Update");
    }
  }

}
