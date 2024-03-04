// category.service.ts
import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [
    { id: 1, name: 'Category 1', description: 'Description for Category 1' },
    { id: 2, name: 'Category 2', description: 'Description for Category 2' }
  ];

  constructor() { }

  // Lấy danh sách danh mục
  getCategories(): Category[] {
    return this.categories;
  }

  // Thêm danh mục mới
  addCategory(category: Category) {
    this.categories.push(category);
  }

  // Xóa danh mục
  deleteCategory(id: number) {
    const index = this.categories.findIndex(category => category.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }
}
