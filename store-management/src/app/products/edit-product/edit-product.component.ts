import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'br-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  pageTitle: string = 'Edit product'
  productForm: FormGroup;
  @Output() create = new EventEmitter<Product>();
  errorMessage = '';
  
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) { }

    ngOnInit() {
      this.productForm = new FormGroup({
        productName: new FormControl('', Validators.required),
        productCode: new FormControl('', Validators.required),
        description: new FormControl(''),
        price: new FormControl(),
        starRating: new FormControl(),
      });
      
      const param = this.route.snapshot.paramMap.get('id');
      if (param) {
        const id = +param;
        this.getProduct(id);
      }
    }
  
    getProduct(id: number) {
      this.productService.getProductById(id).subscribe(
        product => {
          //this.product = product;
          this.productForm = new FormGroup({
            productName: new FormControl(product.productName, Validators.required),
            productCode: new FormControl(product.productCode, Validators.required),
            description: new FormControl(product.description),
            price: new FormControl(product.price),
            starRating: new FormControl(product.starRating),
          });
        },
        error => this.errorMessage = <any>error);
    }

    submitForm() {
      if (this.productForm.invalid) {
        return;
      }
  
      const newProduct: Product = {
        ...this.productForm.value
      };

      const param = +this.route.snapshot.paramMap.get('id');
  
      this.productService.updateProduct(param, newProduct).subscribe(
        product =>{
           console.log(product),
           this.router.navigate(['/products']); 
        },
        error => this.errorMessage = <any>error);
    }
}
