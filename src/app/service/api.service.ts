import { cellInterface } from '../interface/cell-interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from "./user.service";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cells: Observable<any>;
  cell: Observable<any>;
  constructor(private http: HttpClient, private userService : UserService) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type" : "application/json",
    Authorization: this.userService.getToken()
  });

  public getAllCells(){
    let list: number[] = [1, 2, 3];
    const url = "http://localhost:3000/api/cellphones";
    return this.http.get(url);
  }

  getCellphoneById(id: string){
    const url='http://localhost:3000/api/cellphones/${id}';
    return this.cell = this.http.get(url);
  }
  
  saveCellphone(cell){
    const url='http://localhost:3000/api/cellphones?access_token=${token}';
    return this.http.post(url,cell,{headers: this.headers})
    .pipe(map(data=>data));
  }

  updateCellphone(cell){
    const url='http://localhost:3000/api/cellphones?access_token=${token}';
    return this.http.put(url,cell,{headers: this.headers})
    .pipe(map(data=>data));
  }
}
