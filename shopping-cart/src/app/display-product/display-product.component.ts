import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  products = [];
  error:string;
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
   this.ps.getAllProducts().subscribe(res => {
     if(!res.error){
      this.products = res.products
     }
     else{
      this.error = "Failed to load the products";
     }
   }, err => {
     this.error = "Server Error"
   })
  }
}
