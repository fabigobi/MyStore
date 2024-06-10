import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  badge_amount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
      setInterval(() => {
          this.badge_amount = this.cartService.getProductsInCart().length;
      }, 2000)
  }

  

}
