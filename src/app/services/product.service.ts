import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductService {

  constructor() { }
  public getProducts(): Product[]{
  return [{code: 'p100', libelle: 'cafe', prixUnitaire: 500},
          {code: 'p200', libelle: 'Thé', prixUnitaire: 500},
          {code: 'p300', libelle: 'Jus', prixUnitaire: 800},
          {code: 'p400', libelle: 'Coca-cola', prixUnitaire: 1000}];
}

}
