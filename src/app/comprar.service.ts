import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comprar } from './models/Comprar.model';


@Injectable({
  providedIn: 'root'
})
export class ComprarService {

  private url= " http://localhost:3000/comprar";

  constructor(private _httpClient: HttpClient) { }
  getComprar(): Observable<Comprar[]>{
    return this._httpClient.get<Comprar[]>(this.url);
    
  }
}
