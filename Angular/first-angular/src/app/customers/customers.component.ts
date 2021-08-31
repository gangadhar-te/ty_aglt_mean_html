import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(public ds:DataService) { }

  contacts = [];
  ngOnInit(): void {
    this.contacts = this.ds.getContacts();
  }

}
