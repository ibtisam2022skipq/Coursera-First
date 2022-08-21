export class CartModel {
    constructor(
      public productName: String = '',
      public productPrice: Number = 0,
      public isAvailable: boolean = false
    ) {}
  }
  