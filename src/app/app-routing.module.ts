import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';

import { AddFormProductComponent } from './components/product/add-form-product/add-form-product.component';
import { AddFormUserComponent } from './components/contact/add-form-user/add-form-user.component';

import { DetailProductComponent } from './components/product/detail-product/detail-product.component';
import { SearchComponent } from './components/search/search.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ProductCategoryComponent } from './components/product/product-category/product-category.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/category/:name', component: ProductCategoryComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/add', component: AddFormProductComponent},
  {path: 'product/add_product', component: AddProductComponent},
  {path: 'product/detail/:id', component: DetailProductComponent},
  { path: 'search', component: SearchComponent },
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
