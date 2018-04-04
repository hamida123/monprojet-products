import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()//important when other services are injected in this service (has other dipendances)
export class ProductService {
url: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable <Product[]> {
        return this.http.get<Product[]>(this.url);
}

}
