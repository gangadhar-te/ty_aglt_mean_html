import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SampleComponent } from 'src/app/sample/sample.component';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { HoverDirective } from './hover.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { MarkPipe } from './mark.pipe';
import { CustomersComponent } from './customers/customers.component';
import { ObservableComponent } from './observable/observable.component';

let routes:Routes = [
  {path:'data-binding',component:DataBindingComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'template',component:TemplateFormComponent},
  {path:'reactive',component:ReactiveFormComponent},
  {path:'built-in',component:BuiltInPipeComponent},
  {path:'custom',component:CustomPipeComponent},
  {path:'customers',component:CustomersComponent},
  {path:'observable',component:ObservableComponent}


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
    ChildComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    BuiltInPipeComponent,
    CustomPipeComponent,
    MarkPipe,
    CustomersComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
