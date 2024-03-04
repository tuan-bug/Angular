import { Component } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  categories!: Category[];

  constructor(private router: Router,private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  addCategory(name: string, description: string) {
    const newCategory: Category = {
      id: this.categories.length + 1,
      name: name,
      description: description
    };
    this.categoryService.addCategory(newCategory);
    this.router.navigate(['category'])
  }
}
