import { cellInterface } from '../interface/cell-interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }
  
  public getAllCells(){
    let list: number[] = [1, 2, 3];
    const url = "http://localhost:3000/api/books";
    return this.http.get(url);
  }
}
