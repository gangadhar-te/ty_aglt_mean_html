import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
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
      items : this.formBuilder.array([
       this.formBuilder.group({
        itemId: ['1'],
        itemName: ['mobile'],
        itemDesc: ['good mobile']
       })
      ])
    });
  }

  ngOnInit(): void {
    // this.checkInForm.patchValue({
    //   emailAddr: 'test@test.com',
    //   password: 100,
    // });



  }

  postData() {
    console.log(this.checkInForm);
    console.log(this.checkInForm.value);
    console.log(this.checkInForm.get('items').value);
  }

  resetForm(){
    this.checkInForm.reset()
  }

 get items(){
   return this.checkInForm.get('items') as FormArray
 }

  addNewItem(){
   const itemLength = this.items.length;
   const newItem = this.formBuilder.group({
    itemId: [itemLength + 1],
    itemName: [''],
    itemDesc: ['']
   });

   this.items.push(newItem)
  }

}
