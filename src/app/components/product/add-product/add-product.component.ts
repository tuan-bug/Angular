import { Component } from '@angular/core';
import { Goods } from 'src/app/model/goods.model';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: Goods = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  };

  constructor(private goodService: GoodsService) { }

  onSubmit(): void {
    this.goodService.addProduct(this.product)
    .subscribe(response => {
      console.log('Product added successfully:', response);
    }, error => {
      console.error('Error adding product:', error);
    });
  }
}
