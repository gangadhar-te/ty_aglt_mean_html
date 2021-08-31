import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  templateUrl: './built-in-pipe.component.html',
  styleUrls: ['./built-in-pipe.component.css']
})
export class BuiltInPipeComponent implements OnInit {

  user = {
    userId: 10,
    firstName: 'Mamta',
    lastName: 'Yadav',
    DOB: '10/09/1998 19:30',
    salary: 50000

  }

  constructor() { }

  ngOnInit(): void {
  }

}
