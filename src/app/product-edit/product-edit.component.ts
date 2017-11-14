import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductEditComponent implements OnInit {

  product = {
    name: '',
    price: '',
    link: '',
    id: ''};

  constructor(private _router: Router, private _route: ActivatedRoute, private _productService: ProductService) {
    this._route.paramMap.subscribe( params => {
      // params.get('id');
      // console.log('params', params.get('id'));
      this.product = this._productService.products[params.get('id')];
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    this._productService.editProduct(this.product.id, this.product);
    this._router.navigate(['/products']);
  }
}
