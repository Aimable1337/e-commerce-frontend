import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {RegisterComponent} from '../register/register.component';
import {MyAccountComponent} from '../my-account/my-account.component';
import {CheckoutComponent} from '../checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: 'acc', component: MyAccountComponent },
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
