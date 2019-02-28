import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'br-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail'
  product: Product;
  errorMessage = '';
  id: number;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
    ) { }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.id = +params.get('id');
        this.getProduct(this.id);
      });
    }

    getProduct(id: number) {
      this.productService.getProductById(id).subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error);
    }

    deleteProduct() : void{
      this.productService.deleteProduct(this.id).pipe(
        debounceTime(3000)
      ).subscribe(
        message =>{
           console.log(message),
           this.router.navigate(['/products']); 
        },
        error => this.errorMessage = <any>error);
    }
}
