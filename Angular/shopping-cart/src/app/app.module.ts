import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayProductComponent } from './productsCRUD/display-product/display-product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './sharedSpinner/spinner/spinner.component';
import { AddProductComponent } from './productsCRUD/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import { ProductModule } from './productsCRUD/product/product.module';
import { AuthModule } from './authorization/auth/auth.module';
// import { AuthorizationInterceptor } from './authorization.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayProductComponent,
    SpinnerComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProductModule,
    AuthModule
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:AuthorizationInterceptor,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
