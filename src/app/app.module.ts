import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductoComponent } from './producto/producto.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { HttpClientModule} from '@angular/common/http'
import { ProductoService } from './services/producto.service';
import { ProductoCrudComponent } from './producto-crud/producto-crud.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
     CarritoComponent,
    ProductoComponent,
        AdministradorComponent,
    ListaProductosComponent,
    ProductoDetalleComponent,
    ProductoCrudComponent,
    
    
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
