import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AdministradorComponent } from './administrador/administrador.component';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InicioComponent } from './inicio/inicio.component';



const routes: Routes = [
  {path:'inicio',component: InicioComponent},
  {path:'carrito',component: CarritoComponent},
  {path:'producto',component: ProductoComponent},
  {path:'lista-productos',component: ListaProductosComponent},
  
  {path:'administrador',component: AdministradorComponent},





]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
