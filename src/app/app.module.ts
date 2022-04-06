import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { Router, Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
{path:"products",component:ProductListComponent},
{path:"employees",component:EmployeeListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
