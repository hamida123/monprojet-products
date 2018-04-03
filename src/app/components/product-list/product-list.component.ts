import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data: Product[];

  constructor() {
          this.data= [{code: 'p100', libelle: 'cafe', prixUnitaire: 500},
                      {code: 'p200', libelle: 'cafe', prixUnitaire: 500},
                      {code: 'p300', libelle: 'cafe', prixUnitaire: 500}
                      {code: 'p400', libelle: 'the', prixUnitaire: 500}];
   }

  ngOnInit() {
  }

}
