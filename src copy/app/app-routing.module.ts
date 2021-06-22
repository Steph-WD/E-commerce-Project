import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './abms/usuarios/usuarios.component';
import { LoginComponent } from './shared/login/login.component';
import { AdministradorComponent } from '../../src copy/app/administrador/administrador.component';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoCrudComponent } from './producto-crud/producto-crud.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'abm/usuarios',component:UsuariosComponent},
  {path:'inicio',component: InicioComponent},
  {path:'carrito',component: CarritoComponent},
  {path:'producto',component: ProductoComponent},
  {path:'lista-productos',component: ListaProductosComponent},
  {path:'producto/:id',component: ProductoDetalleComponent},
    {path:'administrador',component: AdministradorComponent},
    {path:'productos',component: ProductoCrudComponent},
    {path:'crear-producto',component: CrearProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
