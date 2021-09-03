import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isLoading:boolean;
  message:string;
  error:string;
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
  }

  onFormSubmit(addProductForm){
    this.isLoading = true;
   this.ps.postProducts(addProductForm.value).subscribe(res => {
     console.log(res);
     addProductForm.reset();
     this.isLoading = false;
     if(!res.error){
       this.message = 'Product Added Successfully'
     }
     else{
       this.error = 'Failed to add product, please add again'
     }
   }, err => {
     this.error = 'Server is busy!! try later'
   })
  }
}
