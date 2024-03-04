import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AddFormComponent } from './components/category/add-form/add-form.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'product', component: ProductComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'add_category', component: AddFormComponent},
  
  {path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
