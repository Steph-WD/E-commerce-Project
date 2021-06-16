import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CajaComponent } from './caja/caja.component';

import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductoComponent } from './producto/producto.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdministradorComponent } from './administrador/administrador.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CajaComponent,
    ListaProductoComponent,
    CarritoComponent,
    ProductoComponent,
    UsuariosComponent,
    AdministradorComponent,
    
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
