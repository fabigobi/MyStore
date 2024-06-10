import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
    @Input() product: Product;
    @Input() changeable: Boolean = true;
    amount: number = 0;
    numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    constructor(private cartService: CartService) {
        this.product = new Product();
    }

    ngOnInit(): void {
        this.amount = this.product.amount;
    }
    
    onChange(): void{
        this.cartService.updateProductInCart(this.product, this.amount);
    }

}
