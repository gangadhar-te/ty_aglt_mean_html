import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent  {
  firstName = '';
title :string = 'Welcome to our application';
numbers :number = 56;
obj = {
  name:'Gurunath',
  age: 30,
  place: 'Dharwad'
};
text = 'This is a property binding';
href = 'https://www.facebook.com';
path = 'https://cdn.pixabay.com/photo/2021/08/04/14/21/lighthouse-6521858__480.jpg';


showAlert(){
  alert('We are learning event binding')
};
increaseReg(){
  ++this.numbers
};
decreaseReg(){
  --this.numbers
}


}
