import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy,OnChanges,DoCheck {
  userLoggedIn = true;
  isChild = false;
  parentVariable = '';
  constructor() {
    console.log('Parent Constructor is called');
  }

  ngOnInit(): void {
    console.log('Parent ngOnInit is called');

  }

  // wish(name:string) {
  //   alert('Hello ' + name)
  // };

  toggleChild(){
    this.isChild = !this.isChild;
  }

  ngOnChanges(){
    console.log('Parent ngOnChanges is called');
  }

  ngDoCheck(){
    console.log('Parent ngDoCheck is called');
  }

  ngOnDestroy(){
    console.log('Parent OnDestroy is called');

  }

}
