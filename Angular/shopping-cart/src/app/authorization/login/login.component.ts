import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  isLoading: boolean = false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form:NgForm){
    this.isLoading = true;
    this.auth.loginUser(form.value).subscribe(res => {
      if(!res.error){
        console.log(res);
        this.isLoading = false;
        localStorage.setItem("userDetails",JSON.stringify(res))
       this.router.navigate(['./display'])
      }
      else{
        this.error = 'Login failed'
      }
    },err => {
      this.error = 'Server Error..Cannot Login'
    })
  }

}
