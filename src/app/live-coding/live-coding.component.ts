import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-live-coding',
  templateUrl: './live-coding.component.html',
  styleUrls: ['./live-coding.component.css']
})
export class LiveCodingComponent implements OnInit {
  
  public model: Order = new Order();
  
  constructor( ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // form submitted
    console.log(this.model);
    ;
  }
}

export class Order {
  title: string;
  quantity: number;
  date: Date;
  contact: string;
}

