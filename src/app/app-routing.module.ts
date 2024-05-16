import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';


const routes: Routes = [
  
  {path:'',component: HomeComponent },
  {path:'NestedFormArray',component:NestedFormArrayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
