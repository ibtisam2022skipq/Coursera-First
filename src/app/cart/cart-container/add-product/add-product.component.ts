import { Component, Input, OnInit } from '@angular/core';
import { CartModel } from '../../cart-model/cart-model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input('items') items!: Array<CartModel>;

  constructor(
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
  }
  AddItem(item: CartModel): void {
    this.itemService.addProduct(item);
    // this.items.push(item);

}
}