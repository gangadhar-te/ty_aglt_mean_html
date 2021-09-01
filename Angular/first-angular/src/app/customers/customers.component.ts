import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  msgTrue = false;
  idStorage;
  constructor(public ds:DataService) { }

  contacts:any;
  ngOnInit(): void {
   this.ds.getContacts().subscribe(data => {
     this.contacts = data;
   })
  }

  addNewContact(form:NgForm){
    const formData = {id:form.value.id,
                      firstName:form.value.firstName,
                      lastName:form.value.lastName}

   this.ds.createContact(formData).subscribe(data => {
     console.log(data);
    this.msgTrue = true;
   })
  }

  updateContact(contactId){
   const updation = {id:contactId,firstName:'MahendraSingh',lastName:'Dhoni'}
   this.ds.updateContact(contactId,updation).subscribe(data => {
    this.msgTrue = true;
   })
  }

  removeContact(){
    this.ds.deleteContact(this.idStorage).subscribe(data => {
      console.log(data);
    })
  }

}
