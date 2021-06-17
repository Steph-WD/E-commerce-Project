import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = [
    {
nombre: "Inicio",
enlace: "/inicio",
class: "nav-link active"
    },
    {
      nombre: "Usuarios",
      enlace: "/usuarios",
      class: "nav-link active"
          },
    
          {
            nombre: "Administrador",
            enlace: "/administrador",
            class: "nav-link active"
                },
               
                
               
  ]
  title = 'Suits Store';
}
