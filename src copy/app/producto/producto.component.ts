import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src copy/app/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() productos:Producto = new Producto();

  constructor() { }

  ngOnInit(): void {
  }

}