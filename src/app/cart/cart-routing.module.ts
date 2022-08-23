import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { ListProductComponent } from './cart-container/list-product/list-product.component';

const routes: Routes = [
  {path: '', component: ListProductComponent},
  {path: 'products', component:CartContainerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
