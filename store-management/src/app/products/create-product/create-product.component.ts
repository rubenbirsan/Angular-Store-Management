import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'br-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  pageTitle: string = 'Create new product'
  productForm: FormGroup;
  @Output() create = new EventEmitter<Product>();
  errorMessage = '';
  resultMessage = '';
  
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productCode: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl(),
      starRating: new FormControl(),
    });
  }

  submitForm() {
    if (this.productForm.invalid) {
      return;
    }

    const newProduct: Product = {
      ...this.productForm.value
    };

    this.productService.createProduct(newProduct).subscribe(
      product =>{
         console.log(product),
         this.router.navigate(['/products']); 
      },
      error => this.errorMessage = <any>error);
  }


}
