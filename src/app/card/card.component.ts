import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() titulo = "";
  @Input() descripcion = "";
  @Input() imagenUrl = "";
  constructor() { }

  ngOnInit(): void {
  }

}
