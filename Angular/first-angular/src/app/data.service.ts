import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getContacts(){
  return this.http.get('http://localhost:3000/contacts')
  }

  createContact(createBody){
   return this.http.post('http://localhost:3000/contacts',createBody)
  }

  updateContact(contactId,updateBody){
    const endPoint = 'http://localhost:3000/contacts/' + contactId
    return this.http.put(endPoint,updateBody)
  }

  deleteContact(contactId){
    const endPoint = 'http://localhost:3000/contacts/' + contactId
    return this.http.delete(endPoint);
  }
}
