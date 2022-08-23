import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartModel } from 'src/app/cart/cart-model/cart-model';

@Component({
  selector: 'app-list-product-form',
  templateUrl: './list-product-form.component.html',
  styleUrls: ['./list-product-form.component.css']
})
export class ListProductFormComponent implements OnInit {
  @Input('item') item!: CartModel;
  @Input ('items') items! : Array<CartModel>
  @Output() itemDelete: EventEmitter<CartModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onStatusChange(chkBox: HTMLInputElement): void {
    this.item.isAvailable = chkBox.checked;
  }
  onClick(deleteItem: CartModel){
    this.itemDelete.emit(deleteItem);
  }

}
