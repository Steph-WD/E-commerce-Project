import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AdministradorComponent } from './administrador/administrador.component';
import { AppComponent } from './app.component';
import { CajaComponent } from './caja/caja.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {path:'inicio',component: InicioComponent},
  {path:'carrito',component: CarritoComponent},
  {path:'caja',component: CajaComponent},
  {path:'lista-producto' ,component: ListaProductoComponent},
  {path:'usuarios',component: UsuariosComponent},
  {path:'administrador',component: AdministradorComponent},





]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
