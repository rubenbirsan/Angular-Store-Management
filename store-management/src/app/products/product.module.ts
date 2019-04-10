import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListNgrxComponent } from './product-list-ngrx/product-list-ngrx.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  exports:[
    ProductRoutingModule
  ]
})
export class ProductModule { }
