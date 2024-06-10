import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    products: Product[] = [];
    constructor() { }

    getProductsInCart(): Product[]{
        return this.products;
    }

    addToCart(product: Product): void{
        for (let index = 0; index < this.products.length; index++){
            // updates product in cart if it was already placed in cart
            if (this.products[index].id === product.id){
                this.products.splice(index,1);
            }
        }
        product.total = this.calculateTotal(product);
        this.products.push(product);
    }

    clearCart():void {
        this.products = [];
    }

    calculateTotal(product: Product): number {
        return parseFloat((product.amount * product.price).toFixed(2));
    }

    updateProductInCart(product: Product, new_amount: number): void{
        for (let index = 0; index < this.products.length; index++){
            // updates product in cart if it was already placed in cart
            if (this.products[index].id === product.id){
                if (new_amount > 0) {
                    this.products[index].amount = new_amount;
                    this.products[index].total = this.calculateTotal(this.products[index]);
                }
                else {
                    this.products.splice(index,1);
                }
            }
        }
    }
}
