import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() productos:Producto = new Producto();
qty = 0
  constructor() { }

  ngOnInit(): void {

  }
less () {

}
}