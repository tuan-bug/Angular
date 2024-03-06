import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  providers: [CategoryService],
})
export class EditFormComponent {
  categoryId: number = 0;
  category: any = {};

  constructor( private router: Router,private route: ActivatedRoute, private categoryService: CategoryService){}

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.categoryId = Number(data['id']);
      
      console.log("id edit: " + typeof this.categoryId + this.categoryId);
      this.loadCategory();
    })
  }
  
  loadCategory(){
    this.categoryService.getCategory(this.categoryId).subscribe((category: Category | undefined) => {
      this.category = category;
    });
  }

  onSubmit(){
    const updatedCategory: Category = {
      id: this.categoryId,
      name: this.category.name,
      description: this.category.description
    };
    console.log(updatedCategory)

    this.categoryService.updateCategory(updatedCategory);
    this.router.navigate(['category'])
  }


}
