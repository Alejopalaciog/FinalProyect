import { ApiService } from './../../service/api.service';
import { NgForm } from '@angular/forms';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onDelete(cellForm: NgForm){
    this.apiService.updateCellphone(cellForm.value).subscribe(cell => location.reload());
  }

}
