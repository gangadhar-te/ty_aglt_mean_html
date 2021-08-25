import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
success_msg = false;
employees = [
  {
    id:123,
    firstName:'Gurunath',
    lastName:'Kulkarni'
  },
  {
    id:124,
    firstName:'Prabhanjan',
    lastName:'Deshpande'
  },
  {
    id:125,
    firstName:'Mamta',
    lastName:'Yadav'
  },
  {
    id:126,
    firstName:'Rajee',
    lastName:'Pyla'
  },
  {
    id:127,
    firstName:'Gangadhar',
    lastName:'Beleri'
  }
];

styleClsProp = 'c5';

styleProp = 'purple';
sum = '';
correct = false;
wrong = false;
back = '';
addition(){
  if(this.sum == '112'){
   this.correct = true;
   this.back = 'Green'
  }else {
    this.wrong = true;
    this.back = 'red'
  }
}



  constructor() { }

  ngOnInit(): void {
  }

}
