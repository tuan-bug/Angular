import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  receivedMessage: string = '';

  receiveMessage(message: string) {
    this.receivedMessage = message; // Nhận và gán giá trị từ component con
  }

  categories!: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  // addCategory(name: string, description: string) {
  //   const newCategory: Category = {
  //     id: this.categories.length + 1,
  //     name: name,
  //     description: description
  //   };
  //   this.categoryService.addCategory(newCategory);
  // }

  @Output() dataSent: EventEmitter<number> = new EventEmitter<number>();

  deleteCategory(id: number) {
    console.log("xóa: " + id);
    console.log(this.categories)
    this.categoryService.deleteCategory(id);
  }
}
