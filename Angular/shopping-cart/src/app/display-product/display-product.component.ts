import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../ProductInterface';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
  isLoading : boolean;
  products : any ;
  message:string;
  error:string;
  selectedProductToEdit:any;
  productUpdating = false;
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.isLoading = true;
   this.ps.getAllProducts().subscribe(res => {
     if(!res.error){
       this.isLoading = false;
      this.products = res.products
     }
     else{
      this.error = "Failed to load the products";
     }
   }, err => {
     this.error = "Server Error"
   })
  }

  removeProduct(product:Product){
    this.isLoading = true;
    const confirmation = confirm("Are you sure to delete the product????")
    if(confirmation){
      this.ps.deleteProduct(product._id).subscribe(res => {
        if(!res.error) {
          this.isLoading = false;
          this.products.splice(this.products.indexOf(product),1)
          this.message = 'Product deleted successfully'
        }
        else{
          this.error = 'Product deletion failed'
        }
      },err => {
        this.error = 'Server Error'
      })
    }
    else{
      this.isLoading = false;
    }
  }

  onEditProduct(product){
   this.selectedProductToEdit = {...product};
   console.log(this.selectedProductToEdit);

  }

  onFormSubmit(){
    this.productUpdating = true;
    this.isLoading = true;
    this.ps.updateProduct(this.selectedProductToEdit).subscribe(res => {
      if(!res.error){
        this.productUpdating = false;
        this.isLoading = false;
        this.message = 'Product updated successfully'
        this.products.splice(this.products.findIndex(ele => ele._id ===res.response._id),1,res.response)
      }
      else{
        this.error = 'Product updation failed'
      }
    },err => {
      this.error = 'server Error'
    })
  }

}
