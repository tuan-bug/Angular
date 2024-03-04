import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChildCategoryComponent } from './components/category/child-category/child-category.component';
import { HomeComponent } from './components/home/home.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AddFormComponent } from './components/category/add-form/add-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ProductComponent,
    ContactComponent,
    ChildCategoryComponent,
    HomeComponent,
    AddCategoryComponent,
    AddFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
