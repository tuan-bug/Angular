import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { GoodsService } from 'src/app/services/goods.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent {

  productId: number = 0;
  product: any = {};

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private goodService: GoodsService,
    ){}
  ngOnInit(){
    this.route.params.subscribe(data => {
      this.productId = data['id'];
      console.log("ID: " + this.productId)
        this.goodService.getProductByID(this.productId)
        .subscribe((p: Product | undefined)=> {
          this.product = p;
          console.log(this.product)
        })
      })
  }

}
