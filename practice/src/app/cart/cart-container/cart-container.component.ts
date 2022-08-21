import { Component, OnInit } from '@angular/core';
import { CartModel } from '../cart-model/cart-model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css']
})
export class CartContainerComponent implements OnInit {
  public items: Array<CartModel> = [];
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
  }
  clearTasks(): void {
    this.itemService.clearAll();
    // this.items = [];
  }
}
