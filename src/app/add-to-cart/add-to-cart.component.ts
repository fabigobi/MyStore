import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-add-to-cart',
    templateUrl: './add-to-cart.component.html',
    styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
    amount: number = 0;
    numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    @Input() product: Product;

    constructor(private cartService: CartService) {
        this.product = new Product();
    }

    ngOnInit(): void {
    }

    addToCart(): void {
        this.product.amount = this.amount;
        this.amount = 0;
        this.cartService.addToCart(this.product);
        if (this.product.amount > 1) {
            window.alert(`Added to cart: ${this.product.name} (${this.product.amount} times)`)
        }
        else {
            window.alert(`Added to cart: ${this.product.name} (${this.product.amount} time)`)
        };
    }
}
