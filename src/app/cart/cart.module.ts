import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { AddProductComponent } from './cart-container/add-product/add-product.component';
import { AddProductFormComponent } from './cart-container/add-product/add-product-form/add-product-form.component';
import { ListProductComponent } from './cart-container/list-product/list-product.component';
import { ListProductFormComponent } from './cart-container/list-product/list-product-form/list-product-form.component';
import { ItemService } from './services/item.service';


@NgModule({
  declarations: [
    CartContainerComponent,
    AddProductComponent,
    AddProductFormComponent,
    ListProductComponent,
    ListProductFormComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  providers: [ItemService],
})
export class CartModule { }
