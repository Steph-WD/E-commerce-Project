import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.css']
})
export class GridTableComponent implements OnInit {
  @Input() datos=[];
  @Input() type="";
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.datos)
  }

}
