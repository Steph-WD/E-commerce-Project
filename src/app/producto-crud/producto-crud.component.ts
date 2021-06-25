import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { AddProductoComponent } from './add-producto/add-producto.component';

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
  router: any;
  
  constructor(private _productoService: ProductoService, private route:Router) { }

  ngOnInit(): void {
    console.log("hola")
    this._productoService.getAll().subscribe(response => {
      this.productos = response;
    
    })
  }
updateProducto(producto: Producto) {
this.route.navigate(["/add-producto",producto.id])

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
  

// insertarProducto(){
//   this._productoService.insertarProducto({
//      id: 1,
//      nombre: "FALDA VENECIA",
//      codigo: ASSDF,
//    "precio: 100",
//      "descripcion": "Falda a cuadros marron",
//      "imagenUrl": ""
//  }).subscribe(response => {

//    })
// this.route.navigate(['/crear-producto'])
// }
}
