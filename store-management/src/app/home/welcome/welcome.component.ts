import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  pageTitle: string = 'Welcome to my application';

  constructor() { }

  ngOnInit() {
  }

}
