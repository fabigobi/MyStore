import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    products: Product[] = [];
    total: number = 0;
    constructor(private cartService: CartService, private router: Router, private userDataService: UserDataService) {
    }

    email: string = "";
    first_name: string = "";
    last_name: string = "";
    address: string = "";
    city: string = "";
    country: string = "";
    zip_code: string = "";
    card_number: string = "";
    cvc: string = "";

    ngOnInit(): void {
        this.products = this.cartService.getProductsInCart();
        [this.email, this.first_name, this.last_name, this.address, this.city, this.country, this.zip_code, this.card_number, this.cvc] = this.userDataService.getUserData();
        this.total = this.cartService.getTotal();
    }

    onSubmit(): void {
        this.userDataService.inputUserData(this.email, this.first_name, this.last_name, this.address, this.city, this.country, this.zip_code, this.card_number, this.cvc);

        this.email = "";
        this.first_name = "";
        this.last_name = "";
        this.address = "";
        this.city = "";
        this.country = "";
        this.zip_code = "";
        this.card_number = "";
        this.cvc = "";
        this.router.navigateByUrl('/checkout');
    }

    onUpdate(): void {
        this.total = this.cartService.getTotal();
    }
}
