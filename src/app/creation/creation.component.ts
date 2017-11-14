import { Component, OnInit, ViewEncapsulation,  Output, EventEmitter } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreationComponent implements OnInit {
  @Output() aProductEmitter = new EventEmitter();

  product = {
    name: '',
    price: '',
    link: ''};

  constructor(private _productService: ProductService,
    private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._productService.addProduct(this.product);
    this._router.navigate(['/products']);
  }
}
