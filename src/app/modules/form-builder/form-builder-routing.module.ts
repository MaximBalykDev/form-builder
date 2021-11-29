import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import {AuthGuard} from "../../service/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/formBuilder',
    pathMatch: 'full'
  },
  {
    path: 'formBuilder/formBuilder',
    component: FormBuilderComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
