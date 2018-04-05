import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route, ActivatedRoute} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';
import { RoutingModule } from './routing-module/routing-module';
import { HttpClient } from 'selenium-webdriver/http';



/*const routes: Route[] =[
  {path: 'welcome', component: WelcomeComponent},
  {path: 'list', component: ProductListComponent},
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFountComponent},

];//w'll be*/



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    FooterComponent,
    NotFountComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
