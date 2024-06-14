import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserDataService {
    email: string = "";
    first_name: string = "";
    last_name: string = "";
    address: string = "";
    city: string = "";
    country: string = "";
    zip_code: string = "";
    card_number: string = "";
    cvc: string = "";

    constructor() { }

    inputUserData(email: string, first_name: string, last_name: string, address: string, city: string, country: string, zip_code: string, card_number: string, cvc: string): void {
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.city = city;
        this.country = country;
        this.zip_code = zip_code;
        this.card_number = card_number;
        this.cvc = cvc;
    }

    getUserData(): any {
        let data = [this.email, this.first_name, this.last_name, this.address, this.city, this.country, this.zip_code, this.card_number, this.cvc];
        return data;
    }

    clearInfo(): void {
        this.email = "";
        this.first_name = "";
        this.last_name = "";
        this.address = "";
        this.city = "";
        this.country = "";
        this.zip_code = "";
        this.card_number = "";
        this.cvc = "";
    }
}
