import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-crud',
  templateUrl: './producto-crud.component.html',
  styleUrls: ['./producto-crud.component.css']
})
export class ProductoCrudComponent implements OnInit {
columnas= [
  '',
  'nombre',
  'codigo',
  'precio',
  'descripcion',

]
productos : any;
  constructor(private _productoService: ProductoService, private route:Router) { }

  ngOnInit(): void {
    console.log("hola")
    this._productoService.getAll().subscribe(response => {
      this.productos = response;
    
    })
  }
updateProducto(producto: Producto) {

}
deleteProducto(id: number){
  this._productoService.eliminarProducto(id).subscribe((response:any)=>{
    console.log(response)
    const newItems = this.productos.filter((item:any)=>{
      return item.id !== id
    });
    this.productos = newItems;
  })
  }
  

//insertarProducto(){
//   this._productoService.insertarProducto({
//     "id": 1,
//     "nombre": "FALDA VENECIA",
//     "codigo": "ASSDF",
//     "precio": "USD 100",
//     "descripcion": "Falda a cuadros marron",
//     "imagenUrl": "https://www.pexels.com/es-es/foto/sudadera-rosa-de-mujer-y-falda-de-cuadros-marrones-794064/"
// }).subscribe(response => {

//   })
//this.route.navigate(['/crear-producto'])
//}
}
