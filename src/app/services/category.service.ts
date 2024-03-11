// category.service.ts
import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = "https://dummyjson.com/products/categories";

  constructor(private http: HttpClient) { }

  // Lấy danh sách danh mục
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
        // Trả về một mảng rỗng nếu có lỗi
        return of([]);
      })
    );
  }


  // // dùng rsxjs
  // getCategory(categoryId: number): Observable<Category | undefined> {
  //   const id = Number(categoryId);
  //   const category = this.categories.find(c => c.id === id);
  //   return of(category);

  // }
  // // Thêm danh mục mới
  // addCategory(category: Category) {
  //   this.categories.push(category);
  // }

  // //Sửa danh mục
  // updateCategory(upcategory: Category): void{
  //   const index = this.categories.findIndex(category => category.id === upcategory.id);
  // if (index !== -1) {
  //   this.categories[index] = upcategory;
  //   console.log("Update ok la")
  // } else {
  //   console.error('Category not found with id:', upcategory.id);
  // }
  // }

  // // Xóa danh mục
  // deleteCategory(id: number) {
  //   console.log("hi: " + this.categories.find(category => category.id === id));
  //   const index = this.categories.findIndex(category => category.id === id);
  //   if (index !== -1) {
  //     this.categories.splice(index, 1);
  //   }
  // }
}
