import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'br-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating: number = 0;
  starWidth: Number
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onClick() : void{
    this.ratingClicked.emit('The rating ' + this.rating + ' was clicked');
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  
  ngOnInit() {
  }
}
