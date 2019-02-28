import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [ 
  { path: '', component: ProductListComponent },
  { path: 'product/:id',   component: ProductDetailComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'edit-product/:id',   component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
