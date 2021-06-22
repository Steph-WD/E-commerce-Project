import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  getAll() {
    throw new Error('Method not implemented.');
  }
  url = "http://localhost:3000/productos";
  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get(this.url);
  }
}
