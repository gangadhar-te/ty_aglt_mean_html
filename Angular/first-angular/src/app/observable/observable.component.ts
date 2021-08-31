import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus:any;
  orderStatus2:any;

  data:Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.data =new Observable((observer) => {
       setTimeout(() => {
         observer.next('In progress')
       },2000);
       setTimeout(() => {
        observer.next('Processing')
      },4000);
      setTimeout(() => {
        observer.next('Shipped')
      },6000);
      setTimeout(() => {
        observer.next('Delivered')
      },8000);
      setTimeout(() => {
        observer.complete()
      },10000);
    })

    this.data.subscribe((val) => {
      this.orderStatus = val;
   })

   this.data.subscribe((val) => {
    this.orderStatus2 = val;
 })
  }

}
