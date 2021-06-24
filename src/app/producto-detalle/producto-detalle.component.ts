import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
_producto :any;
  constructor(private _activatedRoute: ActivatedRoute, private _productoService: ProductoService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(route => {
      const id = route.get('id');

      if (id !== null) {
        this._productoService.getAll().subscribe((response:any) => {
          this._producto = response.filter((item:any) => {
            return item.id === parseInt(id);
          })[0]
                });
      }

    });
  }
}
