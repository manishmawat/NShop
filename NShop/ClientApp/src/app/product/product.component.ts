import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../model/Product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList: Product[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Product[]>(baseUrl + 'api/products/').subscribe(result => {
            this.productList = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
