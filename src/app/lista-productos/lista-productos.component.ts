import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
productos: Producto [] = [
  {
    nombre: "FALDA VENECIA",
    codigo: "ASSDF",
    precio: "USD 100",
    descripcion: "Falda a cuadros marron", 
    imagenUrl: "https://www.pexels.com/es-es/foto/sudadera-rosa-de-mujer-y-falda-de-cuadros-marrones-794064/"
  },
  {
    nombre: "PANTALON MABEL",
    codigo: "ERDFF",
    precio: "USD 200",
    descripcion: "Pantalón gris con puntilla blanca",
    imagenUrl: "https://www.pexels.com/es-es/foto/mujer-en-chaqueta-gris-se-encuentra-en-el-piso-de-hormigon-gris-914668/"
  },
  {
    nombre: "SACO ABRIGO JAPON",
    codigo: "ERFSS",
    precio: "USD 250",
    descripcion: "Saco de abrigo a cuadros",
    imagenUrl: "https://www.pexels.com/es-es/foto/foto-de-hombre-vestido-con-abrigo-2706265/"
  },
  {
    nombre: "SACO ABRIGO FERDINAND",
    codigo: "AASSD",
    precio: "USD 250",
    descripcion: "Saco de paño gris",
    imagenUrl: "https://www.pexels.com/es-es/foto/persona-en-abrigo-gris-con-sombrero-negro-3651597/"
  }
]
sku = "";
backup: Producto[]; 

  constructor() {
    this.backup = this.productos;
   }

  ngOnInit(): void {
  }

filtrar() {
let filteredProducts = this.productos.filter(producto => {
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
