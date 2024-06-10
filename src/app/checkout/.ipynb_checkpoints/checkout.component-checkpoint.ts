import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserDataService } from '../services/user-data.service';
import { Product } from '../models/product';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    products: Product[] = [];
    email: string = "";
    first_name: string = "";
    last_name: string = "";
    address: string = "";
    city: string = "";
    country: string = "";
    zip_code: string = "";
    card_number: string = "";
    cvc: string = "";
    total: number = 0;
    
    constructor(private cartService: CartService, private userDataService: UserDataService) { }

    ngOnInit(): void {
        this.products = this.cartService.getProductsInCart();
        for (let index = 0; index < this.products.length; index++){
            this.total += this.products[index].total;
        }
        
        [this.email, this.first_name, this.last_name, this.address, this.city, this.country, this.zip_code, this.card_number, this.cvc] = this.userDataService.getUserData();
    }

}
