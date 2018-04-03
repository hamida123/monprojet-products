import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data: string[];

  constructor() {
    this.data = ['cafe', 'The', 'Jus d\'orange', 'Coca-cola'];
  }

  ngOnInit() {
  }

}
