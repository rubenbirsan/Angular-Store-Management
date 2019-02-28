import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard],  component: ProductDetailComponent },
      { path: 'create-product', component: CreateProductComponent },
      { path: 'edit-product/:id', canActivate: [ProductDetailGuard],  component: EditProductComponent },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
