import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './abms/usuarios/usuarios.component';
import { LoginComponent } from './shared/login/login.component';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoCrudComponent } from './producto-crud/producto-crud.component';
import { CajaComponent } from './caja/caja.component';
import { AddProductoComponent } from './producto-crud/add-producto/add-producto.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'abms/usuarios',component:UsuariosComponent},
  {path:'inicio',component: InicioComponent},
  {path:'Caja', component: CajaComponent},
  {path:'producto',component: ProductoComponent},
  {path:'lista-productos',component: ListaProductosComponent},
  {path:'producto/:id',component: ProductoDetalleComponent},
  {path:'productos',component: ProductoCrudComponent},
  {path:'add-producto', component: AddProductoComponent }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
