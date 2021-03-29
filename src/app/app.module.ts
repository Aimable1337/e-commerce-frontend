import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {HomeComponent} from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductsComponent} from './products/products.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductsComponent,
    AdminPanelComponent,
    LoginFormComponent,
    MyAccountComponent,
    RegisterComponent,
    CheckoutComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
