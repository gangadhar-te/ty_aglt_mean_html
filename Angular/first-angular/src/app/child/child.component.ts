import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck {
  @Input() loggedIn: boolean;
  // @Output() wishEvent = new EventEmitter();
  // name = 'Gurunath';
   counter = 0;
   interval:any;

   @Input() firstName:string;

  constructor() {
    console.log('Child Constructor is called');

  }

  ngOnInit(): void {
    console.log('Child ngOnInit is called');

    // this.interval =  setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);

    //   },1000);

  }

  // callParentMeth(){
  //   this.wishEvent.emit(this.name);
  // };

  ngOnChanges(changes : SimpleChanges){
    // console.log(changes);
    console.log('Child ngOnChanges is called');
  }
  ngDoCheck(){
    console.log('Child ngDoCheck is called');
  }

  ngOnDestroy(){
    // clearInterval(this.interval)
    console.log('Child OnDestroy is called');
  }
}
