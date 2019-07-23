import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['body { background-image: url("src/assets/img/logo.jpeg");}']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
