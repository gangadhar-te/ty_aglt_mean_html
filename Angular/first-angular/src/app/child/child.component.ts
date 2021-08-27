import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input('loggedIn') loginFlag: boolean = true;
  @Output() wishEvent = new EventEmitter();
  name = 'Gurunath';
  constructor() { }

  ngOnInit(): void {
  }

  callParentMeth(){
    this.wishEvent.emit(this.name);
  };
}
