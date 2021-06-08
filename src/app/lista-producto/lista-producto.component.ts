import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  productos = [{
    codigo: "",
    nombre: "",
    descripcion:"",
    precio: "",
    imagenUrl: "",
  }
  
]
  constructor(){ }

  ngOnInit(): void {}}