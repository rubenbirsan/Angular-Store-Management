import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  pageTitle: string = 'Store Management';
  ngOnInit() {
    
  }

}
