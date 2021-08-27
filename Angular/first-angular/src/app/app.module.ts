import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SampleComponent } from 'src/app/sample/sample.component';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { HoverDirective } from './hover.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

let routes:Routes = [
  {path:'data-binding',component:DataBindingComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DataBindingComponent,
    GalleryComponent,
    DirectivesComponent,
    HoverDirective,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
