import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CartModel } from '../../cart-model/cart-model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
@Input ('items') items! : Array<CartModel>
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
}
deleteItem(item:CartModel){
  // this.itemService.deleteProduct(item);
  const index = this.items.indexOf(item);
  this.items.splice(index, 1);
  }
}

