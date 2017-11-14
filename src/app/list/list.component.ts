import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  products = [];

  constructor(private _router: Router, private _productService: ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

  deleteProduct(idx) {
    this._productService.deleteProduct(idx);
    this._router.navigate(['/products']);
  }
}
