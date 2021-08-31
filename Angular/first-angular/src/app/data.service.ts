import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getContacts(){
    //code to fetch data from backend
    const contactList = [
      {contactId:1, contactName: 'Gangadhar'},
      {contactId:2, contactName: 'Mamta'},
      {contactId:3, contactName: 'Prabhanjan'},
      {contactId:4, contactName: 'Rajee'},
      {contactId:5, contactName: 'Gurunath'}
    ];
    return contactList;
  }

  callFromTemplate(){
    console.log('Calling from Template directly');

  }
}
