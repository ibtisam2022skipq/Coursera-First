import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductFormComponent } from './cart/cart-container/add-product/add-product-form/add-product-form.component';
import { AddProductComponent } from './cart/cart-container/add-product/add-product.component';
import { CartContainerComponent } from './cart/cart-container/cart-container.component';
import { ListProductFormComponent } from './cart/cart-container/list-product/list-product-form/list-product-form.component';
import { ListProductComponent } from './cart/cart-container/list-product/list-product.component';



@NgModule({
  declarations: [
    AppComponent,
    CartContainerComponent,
    AddProductComponent,
    AddProductFormComponent,
    ListProductComponent,
    ListProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
