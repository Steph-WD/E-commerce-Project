import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

productos: any= []
sku = "";
desde = "";
hasta = "";

backup: Producto[];

  constructor(private productoService: ProductoService ) {
    this.backup = this.productos;
   }

  ngOnInit(): void {
    this.productoService.getProducts().subscribe(response => {
    this.productos = response;
    }
      )
  }

filtrar() {
let filteredProducts = this.productos.filter((producto:Producto) => {
  return producto.codigo.toLowerCase === this.sku.toLowerCase;
})
this.productos = filteredProducts;
}
handleCod() {
  if (this.sku.length === 0) {
    this.productos = this.backup;
  }
}
}
