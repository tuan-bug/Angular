import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AddFormComponent } from './components/category/add-form/add-form.component';
import { AddFormProductComponent } from './components/product/add-form-product/add-form-product.component';
import { AddFormUserComponent } from './components/contact/add-form-user/add-form-user.component';
import { EditFormComponent } from './components/category/edit-form/edit-form.component';
import { DetailProductComponent } from './components/product/detail-product/detail-product.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/add', component: AddFormComponent},
  {path: 'category/edit/:id', component: EditFormComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/add', component: AddFormProductComponent},
  {path: 'product/detail/:id', component: DetailProductComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'user/add', component: AddFormUserComponent},
  // {path: 'add_category', component: AddFormComponent},
  
  
  {path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
