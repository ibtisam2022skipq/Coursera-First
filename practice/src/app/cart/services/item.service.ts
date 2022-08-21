import { Injectable } from '@angular/core';
import { CartModel } from '../cart-model/cart-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  products: Array<CartModel> = [];
  constructor() { }

  public addProduct(item: CartModel): void {
    this.products.push(item);
  }
  public deleteProduct(item: CartModel): void {
    const index = this.products.indexOf(item);
    this.products.splice(index, 1);
  }
  public clearAll(): void {
    this.products = [];
  }
}
