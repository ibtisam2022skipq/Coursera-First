import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CartModel } from 'src/app/cart/cart-model/cart-model';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  @ViewChild('isAvailable', {static: false}) isAvailable!: ElementRef;
  @ViewChild('productName', {static: false}) productName!: ElementRef;
  @ViewChild('productPrice', {static: false}) productPrice!: ElementRef;

  @Output('onAddItem') onAddItem!: EventEmitter<CartModel>;

  constructor() { 
    this.onAddItem = new EventEmitter<CartModel>();
  }

  ngOnInit(): void {
  }
  onBtnAddItemClick(): void {
    const cart: CartModel = new CartModel();
    cart.productName = (<HTMLInputElement>this.productName.nativeElement).value;
    cart.productPrice = +(<HTMLInputElement>this.productPrice.nativeElement).value;
    cart.isAvailable = (<HTMLInputElement>this.isAvailable.nativeElement).checked;
    this.onAddItem.emit(cart)
  }
}
