import { Component, Input } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IProduct } from '../../types/product';

@Component({
  standalone: false,
  selector: 'app-productComponent',
  templateUrl: './product.component.html',

})

export class ProductComponent {
  @Input()
  product!: IProduct;
  details = false
}
