import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './productsCRUD/add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { DisplayProductComponent } from './productsCRUD/display-product/display-product.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';

const routes: Routes = [
{path:'display',component:DisplayProductComponent,data:{roles : ["admin","user"]},
canActivate:[AuthGuard]},
{path:'add',component:AddProductComponent,data:{roles : ["admin"]},
canActivate:[AuthGuard]},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
