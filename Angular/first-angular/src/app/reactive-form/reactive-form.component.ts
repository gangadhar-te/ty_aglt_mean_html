import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  checkInForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.checkInForm = formBuilder.group({
      emailAddr: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      password: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    this.checkInForm.patchValue({
      emailAddr: 'test@test.com',
      password: 100,
    });
  }

  postData() {
    console.log(this.checkInForm);
    console.log(this.checkInForm.value);
  }

  resetForm(){
    this.checkInForm.reset()
  }
}
