import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating: number = 0;
  starWidth: Number

  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  ngOnInit() {
  }

}
