import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsComponent} from "./forms/forms.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'sign', component: FormsComponent },
  { path: 'reset', component: ResetPasswordComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
