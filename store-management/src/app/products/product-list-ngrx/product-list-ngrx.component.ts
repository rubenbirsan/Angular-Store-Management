import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadProducts, LoadProductsSuccess } from '../actions/product.actions';
import { getProductLoading } from '../selectors/product.selectors';

@Component({
  selector: 'br-product-list-ngrx',
  templateUrl: './product-list-ngrx.component.html',
  styleUrls: ['./product-list-ngrx.component.css']
})
export class ProductListNgrxComponent implements OnInit {

  products$: Observable<Product[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getProductLoading));
    
    this.store.dispatch(new LoadProducts());
  }

}
