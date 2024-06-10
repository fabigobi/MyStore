import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
    
  constructor(private route: ActivatedRoute, private productDataService: ProductDataService) {
      this.product = new Product();
  }

  ngOnInit(): void {
      let productId = this.route.snapshot.params['id'];
      this.productDataService.getProducts()
      .subscribe(res => {
          this.product = res.find(opt => opt.id == productId)!;
      });
  }
}