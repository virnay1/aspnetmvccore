import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { IProduct } from '../iproduct';

@Inject(ProductsService)
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:IProduct[] = [];
  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data:any) => {
      let x = 0;
      for(x=0;x<data.length;x++){
        this.products.push({Name:data[x].name, Id:data[x].id,Price:data[x].price});
      }

      //console.log(JSON.stringify(this.products));
    });
  }

}
