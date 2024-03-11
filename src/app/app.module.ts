import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChildCategoryComponent } from './components/category/child-category/child-category.component';
import { HomeComponent } from './components/home/home.component';

import { AddFormProductComponent } from './components/product/add-form-product/add-form-product.component';
import { AddFormUserComponent } from './components/contact/add-form-user/add-form-user.component';

import { DetailProductComponent } from './components/product/detail-product/detail-product.component';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ProductCategoryComponent } from './components/product/product-category/product-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ProductComponent,
    ContactComponent,
    ChildCategoryComponent,
    HomeComponent,
  
    AddFormProductComponent,
    AddFormUserComponent,
  
    DetailProductComponent,
    SearchComponent,
    AddProductComponent,
    ProductCategoryComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
