import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';
import { NshopConfigService } from './nshop-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(http:HttpClient, @Inject('BASE_URL') baseUrl:string,appConfig:NshopConfigService) {
    http.get<Product>(baseUrl+appConfig.getConfig()["defaultAPIMethod"])
    .subscribe(result=>{
      return result;
    },error=>console.log(error));
   }
}
