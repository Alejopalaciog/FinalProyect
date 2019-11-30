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

  constructor(private http: HttpClient, private userService : UserService) { }
  cells: Observable<any>;
  cell: Observable<any>;
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type" : "application/json",
    Authorization: this.userService.getToken()
  });

  public getAllCells(){
    let list: number[] = [1, 2, 3];
    const url = "http://localhost:3000/api/cellphones?filter[where][hide]=0";
    return this.http.get(url);
  }

  getCellphoneById(id: string){
    const url='http://localhost:3000/api/cellphones/${id}';
    return this.cell = this.http.get(url);
  }
  
  saveCellphone(cell: cellInterface){
    const url='http://localhost:3000/api/cellphones?access_token=${token}';
    return this.http.post<cellInterface>(url,cell,{headers: this.headers})
    .pipe(map(data=>data));
  }

  updateCellphone(cell: cellInterface){
    const url='http://localhost:3000/api/cellphones?access_token=${token}';
    return this.http.put<cellInterface>(url,cell,{headers: this.headers})
    .pipe(map(data=>data));
  }

  /*deleteCellphone(){
    const url='http://localhost:3000/api/cellphones?access_token=${token}';
    return this.http.delete<cellInterface>(url,{headers: this.headers})
    .pipe(map(data=>data));
  }*/

}
