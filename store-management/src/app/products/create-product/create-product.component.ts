import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor() { }

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
      ...this.productForm.value,
      rating: 1
    };

    this.create.emit(newProduct);
  }


}
