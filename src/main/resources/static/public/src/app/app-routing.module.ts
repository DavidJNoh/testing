import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { UserFormComponent } from './components/user-form/user-form.component';


const routes: Routes = [
  {path:'form', component: ShoppingComponent},
  {path:'', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
