import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, startWith, map } from 'rxjs/operators';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'br-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  pageTitle: string = "Product List";
  imageWidth: number = 40;
  imageMargin: number = 2;
  showImages: boolean = false;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];
  currentWidth = 0;
  errorMessage = '';

  toggleImage() : void{
    this.showImages = !this.showImages;
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      product.productCode.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(private productService: ProductService) { 
   
  }

  onRatingClicked(message: string) : void{
    this.pageTitle = message;
  }

  ngOnInit() {
    fromEvent(window, 'resize').pipe(
      debounceTime(10),
      map(() => window.innerWidth),
      startWith(window.innerWidth),
    ).subscribe(width => this.currentWidth = width);

    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
        this.listFilter = '';
      },
      error => this.errorMessage = error
      );
   
  }
}
