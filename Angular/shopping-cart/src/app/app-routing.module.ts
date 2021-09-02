import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProductComponent } from './display-product/display-product.component';

const routes: Routes = [
{path:'display',component:DisplayProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
