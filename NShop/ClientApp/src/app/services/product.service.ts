import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';
import { NshopConfigService } from './nshop-config.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,  
    @Inject('BASE_URL') private baseUrl:string,private appConfig:NshopConfigService) {
   }

   getProductList():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+this.appConfig.getConfig()["defaultAPIMethod"]);
   }

   getProductDetails(id){
     return this.http.get<Product>(this.baseUrl+this.appConfig.getConfig()["defaultAPIMethod"]+'/'+id);
   }
}
