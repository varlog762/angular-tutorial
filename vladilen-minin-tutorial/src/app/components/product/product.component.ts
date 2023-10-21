import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductCOmponent {
  @Input() product: IProduct;

  details = false;
};