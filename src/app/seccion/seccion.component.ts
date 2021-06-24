import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  mail = "example@gmail.com"
  constructor() { }
  chBox = false;
  ngOnInit(): void {
  }

  submit(e:any){
    e.preventDefault();
    console.log(this.mail)
  }

  change(){
    this.chBox = !this.chBox;
    this.mail = "";
  }

}
